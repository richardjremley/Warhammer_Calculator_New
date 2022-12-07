const { Attacker, Defender } = require("../models");

const GetSolution = async (req, res) => {
  try {
    let A = await Attacker.findOne({});
    let B = await Defender.findOne({});
    let woundRoll = "";
    let semiProperBS = "";
    let semiProperSave = "";
    let semiInvSave = "";
    if (A.BS == 3) {
      semiProperBS = 4;
    } else if (A.BS == 2) {
      semiProperBS = 5;
    } else if (A.BS == 4) {
      semiProperBS = 3;
    } else if (A.BS == 5) {
      semiProperBS = 2;
    } else if (A.BS == 6) {
      semiProperBS = 1;
    }
    if (B.Save == 3) {
      semiProperSave = 2;
    } else if (B.Save == 2) {
      semiProperSave = 1;
    } else if (B.Save == 4) {
      semiProperSave = 3;
    } else if (B.Save == 5) {
      semiProperSave = 4;
    } else if (B.Save == 6) {
      semiProperSave = 5;
    }

    if (A.S > B.T) {
      woundRoll = 4 / 6;
    }
    if (A.S >= B.T * 2) {
      woundRoll = 5 / 6;
    }
    if (A.S === B.T) {
      woundRoll = 3 / 6;
    }
    if (A.S < B.T) {
      woundRoll = 2 / 6;
    }
    if (A.S * 2 <= B.T) {
      woundRoll = 1 / 6;
    }
    if (B.Inv_Save == 3) {
      semiInvSave = 2;
    } else if (B.Inv_Save == 2) {
      semiInvSave = 1;
    } else if (B.Inv_Save == 4) {
      semiInvSave = 3;
    } else if (B.Inv_Save == 5) {
      semiInvSave = 4;
    } else if (B.Inv_Save == 6) {
      semiInvSave = 5;
    }

    let properSave = semiProperSave / 6 + A.AP / 6;
    if (properSave >= 1) {
      properSave = 1;
    }

    let invSave = semiInvSave / 6;

    if (invSave >= properSave) {
      invSave = 1;
    }

    if (invSave == 0) {
      invSave = 1;
    }
    if (properSave > invSave) {
      properSave = 1;
    }
    let fnp = (B.FNP - 1) / 6;

    if (fnp <= 0) {
      fnp = 1;
    }
    let properBS = semiProperBS / 6;

    let woundDamage = A.damage;
    let woundTotal = B.wounds;

    if (woundDamage > woundTotal) {
      woundDamage = woundTotal;
    }

    // const toHitRoll =
    //   A.shotsNumber *
    //   properBS *
    //   woundRoll *
    //   properSave *
    //   invSave *
    //   woundDamage *
    //   fnp;
    res.send("4");
    console.log(
      A.S,
      B.T,
      A.shotsNumber,
      properBS,
      woundRoll,
      properSave,
      invSave,
      woundDamage,
      B.FNP,
      fnp
    );
  } catch (error) {
    console.log(error);
  }
};

const TestGet = async (req, res) => {
  try {
    Attack1 = await Attacker.findOne({});
    res.send(Attack1);
  } catch (error) {
    throw error;
  }
};

module.exports = [GetSolution, TestGet];

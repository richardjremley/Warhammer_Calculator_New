const { Attacker, Defender } = require("../models");
const getShotsNumber = async (req, res) => {
  try {
    Defend = await Defender.findOne({});
    res.send(Defend.shotsNumber);
  } catch (error) {
    throw error;
  }
};

const GetDefender2 = async (req, res) => {
  try {
    Defend2 = await Defender.findAll({});
    res.send(Defend2.T);
  } catch (error) {
    throw error;
  }
};

const GetDefender = async (req, res) => {
  try {
    Defend1 = await Defender.findOne({});
    res.send(Defend1);
  } catch (error) {
    throw error;
  }
};
const updateDefender = async (req, res) => {
  try {
    const update = await Defender.findByPK(res.params.attacker_id);
    console.log(update.dataValues, "here");
    await update.update(req.body);
    res.send(update);
  } catch (error) {
    throw error;
  }
};

const GetAttacker2 = async (req, res) => {
  try {
    Attack2 = await Attacker.findOne({});
    res.send(Attack2);
  } catch (error) {
    throw error;
  }
};

const GetTest = async (req, res) => {
  try {
    yourMother = "4";
    res.send(yourMother);
  } catch (error) {
    throw error;
  }
};

const getHits = async (req, res) => {
  try {
    let A = await Attacker.findOne({});
    let semiProperBS = "";
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

    res.send(String(semiProperBS));
  } catch (error) {
    throw error;
  }
};

const getWounds = async (req, res) => {
  try {
    let A = await Attacker.findOne({});
    let B = await Defender.findOne({});
    let woundRoll = "";
    let semiProperBS = "";
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
    res.send(String(woundRoll));
  } catch (error) {
    throw error;
  }
};

const getUnsavedWounds = async (req, res) => {
  try {
    let A = await Attacker.findOne({});
    // let A = A2[A2.length - 1];
    let B = await Defender.findOne({});
    // let B = B2[B2.length - 1];
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

    const unsavedWounds =
      A.shotsNumber *
      properBS *
      woundRoll *
      properSave *
      invSave *
      woundDamage *
      fnp;
    res.send(String(unsavedWounds));
  } catch (error) {
    throw error;
  }
};

const GetSolution2 = async (req, res) => {
  try {
    let A = await Attacker.findOne({});
    // let A = A2[A2.length - 1];
    let B = await Defender.findOne({});
    // let B = B2[B2.length - 1];
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

    const toHitRoll =
      A.shotsNumber *
      properBS *
      woundRoll *
      properSave *
      invSave *
      woundDamage *
      fnp;
    res.json(toHitRoll);
    console.log(
      // A,
      // B,
      A.S,
      B.T,
      A.shotsNumber,
      properBS,
      woundRoll,
      properSave,
      invSave,
      woundDamage,
      B.FNP,
      fnp,
      toHitRoll
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  GetDefender,
  GetDefender2,
  updateDefender,
  GetSolution2,
  GetAttacker2,
  getHits,
  GetTest,
  getWounds,
  getUnsavedWounds,
};

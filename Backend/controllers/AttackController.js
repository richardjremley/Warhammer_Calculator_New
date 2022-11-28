const { Attacker } = require("../models");

const GetAttacker = async (req, res) => {
  try {
    Attack1 = await Attacker.findOne({});
    res.send(Attack1);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAttacker,
};

const { attacker } = require("../models");

const GetAttacker = async (req, res) => {
  try {
    Attack1 = await attacker.findOne({});
    res.send(Attack1);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAttacker,
};

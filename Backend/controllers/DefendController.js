const { Defender } = require("../models");

const GetDefender = async (req, res) => {
  try {
    Defend1 = await Defender.findOne({});
    res.send(Defend1);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetDefender,
};

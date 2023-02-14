const { Attacker } = require("../models");

const GetAttacker = async (req, res) => {
  try {
    Attack1 = await Attacker.findOne({ id: 1 });
    res.send(Attack1);
  } catch (error) {
    throw error;
  }
};

const GetAttackerById = async (req, res) => {
  try {
    Attack2 = await Attacker.findByPk(req.params.attacker_id);
    res.send(Attack2);
  } catch (error) {
    throw error;
  }
};

const updateAttacker = async (req, res) => {
  try {
    const update = await Attacker.findByPk(req.params.attacker_id);
    console.log(update.dataValues, "here");
    await update.update(req.body);

    res.send(update);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAttacker,
  GetAttackerById,
  updateAttacker,
};

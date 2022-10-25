"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attacker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attacker.init(
    {
      name: DataTypes.STRING,
      shotsNumber: DataTypes.NUMBER,
      BS: DataTypes.NUMBER,
      S: DataTypes.NUMBER,
      AP: DataTypes.NUMBER,
      damage: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Attacker",
      tableName: "attacker",
    }
  );
  return Attacker;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Defender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Defender.init({
    name: DataTypes.STRING,
    T: DataTypes.NUMBER,
    wounds: DataTypes.NUMBER,
    save: DataTypes.NUMBER,
    invSave: DataTypes.NUMBER,
    FNP: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Defender',
  });
  return Defender;
};
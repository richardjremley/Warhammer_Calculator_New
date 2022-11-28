"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("defenders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      T: {
        type: Sequelize.INTEGER,
      },
      wounds: {
        type: Sequelize.INTEGER,
      },
      save: {
        type: Sequelize.INTEGER,
      },
      invSave: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      FNP: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("defenders");
  },
};

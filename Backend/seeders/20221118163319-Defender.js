"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("defenders", [
      {
        name: "Space Marine",
        T: 4,
        wounds: 2,
        save: 3,
        invSave: 5,
        FNP: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("defenders");
  },
};

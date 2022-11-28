"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("attackers", [
      {
        name: "Bolter",
        shotsNumber: 1,
        BS: 3,
        S: 4,
        AP: 1,
        damage: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("attackers");
  },
};

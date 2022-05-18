"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Classrooms", [
      {
        name: "IPA #",
        description: "Demo Class",
        teacher_id: 1,
        classcode: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "IPS 2",
        description: "Kelas IPS 2",
        teacher_id: 1,
        classcode: "D4Fr31Dc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Classrooms", null, {});
  },
};

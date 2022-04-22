"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Classrooms", [
      {
        name: "Demo Class",
        description: "Demo Class",
        teacher_id: 1,
        classcode: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Classrooms", null, {});
  },
};

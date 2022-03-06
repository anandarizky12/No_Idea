"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("classrooms", [
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
    return queryInterface.bulkDelete("classrooms", null, {});
  },
};

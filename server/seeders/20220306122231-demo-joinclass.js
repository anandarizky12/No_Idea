"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("student_classrooms", [
      {
        student_id: 3,
        classroom_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        classroom_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        classroom_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("student_classrooms", null, {});
  },
};

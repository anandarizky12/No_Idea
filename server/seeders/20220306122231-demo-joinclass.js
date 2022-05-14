"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Student_Classrooms", [
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
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Student_Classrooms", null, {});
  },
};

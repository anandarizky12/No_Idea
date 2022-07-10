'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User_Answered_Tasks", [
      {
        student_id : 2,
        task_id : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("User_Answered_Tasks", null, {});
  }
};

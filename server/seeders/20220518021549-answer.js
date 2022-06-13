'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Answer_tasks", [
      {
        answer :
          "oksigen", 
        student_id: 2,
        question_id : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      answer :
        "karbondioksida",
      student_id: 2,
      question_id : 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Answer_tasks", null, {});
  }
};

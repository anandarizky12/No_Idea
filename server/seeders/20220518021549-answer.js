'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Answer_tasks", [
      {
        answer :
          "oksigen", 
        score_id : 1,
        student_id : 2,
        student_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      answer :
        "karbondioksida" ,
      score_id : 2,
      student_id : 2,
      student_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Questions", null, {});
  }
};

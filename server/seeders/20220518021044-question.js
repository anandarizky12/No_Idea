'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Questions", [
      {
        question :
          "O2 merupakan lambang untuk ? ",
        task_id : 1, 
        answer_id : 1,
      
        classroom_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      question :
        "h20 merupakan lambang untuk ? ",
      task_id : 1, 
      answer_id : 2,
    
      classroom_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Questions", null, {});
  }
};

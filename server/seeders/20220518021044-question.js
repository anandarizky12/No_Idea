'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Questions", [
      {
        question :
          "O2 merupakan lambang untuk ? ",
        task_id : 1, 
      
        answer_key : "oksigen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      question :
        "h20 merupakan lambang untuk ? ",
      task_id : 1, 
    
        answer_key : "karbondioksida",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Questions", null, {});
  }
};

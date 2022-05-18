'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Scores", [
      {
        score : 50,
        answer_id : 1,
        task_id : 1,
        classroom_id : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        score : 50,
        answer_id : 2,
        task_id : 1,
        classroom_id : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Scores", null, {});
  }
};

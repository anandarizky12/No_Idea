'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Answer_tasks", [
      {
        score : 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        score : 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Scores", null, {});
  }
};

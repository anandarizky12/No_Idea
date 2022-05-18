'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question : Sequelize.STRING,
    
      task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tasks",
          key: "id",
          as: "task_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      answer_id : {
        type: Sequelize.INTEGER,
        references: {
          model: "Answer_tasks",
          key: "id",
          as: "answer_id",
        },
        unique: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Questions");
  }
};

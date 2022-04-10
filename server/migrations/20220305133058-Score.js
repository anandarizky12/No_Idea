"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("scores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      score: Sequelize.INTEGER,
      answer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "answer_tasks",
          key: "id",
          as: "answer_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      classroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "classrooms",
          key: "id",
          as: "classroom_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tasks",
          key: "id",
          as: "task_id",
        },
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

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("scores");
  },
};

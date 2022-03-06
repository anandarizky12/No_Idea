"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: Sequelize.STRING,
      answer_key: Sequelize.STRING,
      deadline: Sequelize.DATE,
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
      answer_task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "answer_tasks",
          key: "id",
          as: "answer_task_id",
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
    queryInterface.dropTable("tasks");
  },
};

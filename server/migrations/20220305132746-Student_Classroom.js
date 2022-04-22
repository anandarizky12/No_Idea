"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Student_Classrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "student_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      classroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Classrooms",
          key: "id",
          as: "classroom_id",
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
    queryInterface.dropTable("Student_Classrooms");
  },
};

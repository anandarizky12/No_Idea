"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "teacher_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      classcode: Sequelize.STRING,
      banner: Sequelize.STRING,
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
    queryInterface.dropTable("Classrooms");
  },
};

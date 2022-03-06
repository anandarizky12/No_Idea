"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("classrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      members_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
          as: "members_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      teacher_id: Sequelize.INTEGER,
      classcode: Sequelize.STRING,
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
    queryInterface.dropTable("classrooms");
  },
};
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: Sequelize.STRING,
      // answer_key: Sequelize.STRING,
      deadline: Sequelize.DATE,
      timetable: Sequelize.DATE,
      description: Sequelize.STRING,
      other: Sequelize.STRING,
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
      mapel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mapels",
          key: "id",
          as: "mapel_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      time : Sequelize.INTEGER,
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
    queryInterface.dropTable("Tasks");
  },
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("Comments", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "users",
            key: "id",
            as: "user_id",
          },
        },
        comment: Sequelize.STRING,
        task_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Tasks",
            key: "id",
            as: "task_id",
          },
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
    } catch (err) {
      // console.log(err);
    }
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("Comments");
  },
};

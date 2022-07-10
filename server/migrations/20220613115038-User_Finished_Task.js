'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("User_Answered_Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id :{
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "student_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      task_id : {
        type : Sequelize.INTEGER,
        references : {
          model : "Tasks",
          key : 'id',
          as : "task_id"
        }
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
    queryInterface.dropTable("User_Answered_Tasks");
  },
};

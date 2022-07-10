"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      
      address: Sequelize.STRING,
      religion : Sequelize.STRING,
      birth_date : Sequelize.DATE,
      place_of_birth : Sequelize.STRING,
      father : Sequelize.STRING,
      mother : Sequelize.STRING,
      father_job : Sequelize.STRING,
      mother_job : Sequelize.STRING,

      role: Sequelize.STRING,
      profile: Sequelize.STRING,
      jk : Sequelize.STRING,
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
    queryInterface.dropTable("Users");
  },
};

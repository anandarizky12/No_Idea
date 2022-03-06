export {};
const db = require("../models");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class User extends Model {
    static associate(models: any) {
      User.hasMany(models.Classroom, {
        foreignKey: {
          name: "classroom_id",
        },
      });
    }
  }

  User.init(
    {
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      profile: Sequelize.STRING,
      no_induk: Sequelize.STRING,
      classroom_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

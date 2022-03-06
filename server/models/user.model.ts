export {};
const db = require("../models");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class User extends Model {
    static associate(models: any) {
      User.belongsToMany(models.Classroom, {
        through: "Students_Classroom",
        foreignKey: {
          name: "student_id",
        },
        as: "classrooms",
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
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

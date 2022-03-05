export {};
const db = require("../models");
const Classroom = db.Classroom;

module.exports = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define("users", {
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING,
    profile: Sequelize.STRING,
    no_induk: Sequelize.STRING,
    classroom_id: Sequelize.INTEGER,
  });

  User.hasMany(Classroom, {
    as: "user",
    foreignKey: {
      name: "classroom_id",
    },
  });

  return User;
};

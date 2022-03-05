const Classroom = require("./classroom.model");

module.exports = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define("users", {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING,
    profile: Sequelize.STRING,
    classroom: Sequelize.JSON,
  });

  User.hasMany(Classroom, {
    as: "classrooms",
    foreignKey: {
      name: "classroom",
    },
  });

  return User;
};

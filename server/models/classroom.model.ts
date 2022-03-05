export {};
const db = require("./index");
const User = db.user;

module.exports = (sequelize: any, Sequelize: any) => {
  const Classroom = sequelize.define("classrooms", {
    name: Sequelize.STRING,
    members_id: Sequelize.INTEGER,
    assignment_id: Sequelize.INTEGER,
    teacher_id: Sequelize.INTEGER,
    classcode: Sequelize.STRING,
  });

  Classroom.belongsTo(User, {
    as: "user",
    foreignKey: {
      name: "teacher_id",
    },
  });

  Classroom.hasMany(User, {
    as: "user",
    foreignKey: {
      name: "members_id",
    },
  });

  https: return User;
};

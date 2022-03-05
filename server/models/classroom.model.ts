const User = require("./user.model");
const Assignment = require("./assignment.model");

module.exports = (sequelize: any, Sequelize: any) => {
  const Classroom = sequelize.define("classroom", {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    teacher: Sequelize.STRING,
    code: Sequelize.STRING,
    students: Sequelize.JSON,
    assignments: Sequelize.JSON,
  });

  Classroom.belongsTo(User, {
    as: "users",
    foreignKey: {
      name: "teacher",
    },
  });

  Classroom.hasMany(Assignment, {
    as: "assignments",
    foreignKey: {
      name: "assignments",
    },
  });

  Classroom.hasMany(User, {
    as: "users",
    foreignKey: {
      name: "students",
    },
  });

  return Classroom;
};

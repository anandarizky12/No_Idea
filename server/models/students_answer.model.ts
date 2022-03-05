export {};
const User = require("./user.model");
const Assignment = require("./assignment.model");

module.exports = (sequelize: any, Sequelize: any) => {
  const Student_answer = sequelize.define("student_answers", {
    name: Sequelize.STRING,
    assignment: Sequelize.INTEGER,
    student_id: Sequelize.INTEGER,
    answer: Sequelize.STRING,
  });

  Student_answer.belongsTo(User, {
    as: "users",
    foreignKey: {
      name: "student_id",
    },
  });

  Student_answer.belongsTo(Assignment, {
    as: "assignments",
    foreignKey: {
      name: "assignment",
    },
  });

  return Student_answer;
};

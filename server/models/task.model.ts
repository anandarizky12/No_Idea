export {};
const db = require("./index");
const User = db.user;
const Classroom = db.classroom;

module.exports = (sequelize: any, Sequelize: any) => {
  const Task = sequelize.define("tasks", {
    title: Sequelize.STRING,
    answer_key: Sequelize.STRING,
    deadline: Sequelize.DATE,
    classroom_id: Sequelize.INTEGER,
  });

  Task.belongsTo(Classroom, {
    as: "classroom",
    foreignKey: {
      name: "classroom_id",
    },
  });

  return Task;
};

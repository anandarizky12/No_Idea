export {};
const db = require("./index");
const User = db.user;
const Task = db.task;

module.exports = (sequelize: any, Sequelize: any) => {
  const Answer_task = sequelize.define("answer_task", {
    students_id: Sequelize.INTEGER,
    answer: Sequelize.STRING,
    score_id: Sequelize.INTEGER,
    task_id: Sequelize.INTEGER,
  });

  Answer_task.belongsTo(User, {
    as: "user",
    foreignKey: {
      name: "students_id",
    },
  });

  Answer_task.belongsTo(Task, {
    as: "task",
    foreignKey: {
      name: "task_id",
    },
  });

  return Answer_task;
};

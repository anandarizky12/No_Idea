export {};
const db = require("./index");
const User = db.user;
const Task = db.task;

module.exports = (sequelize: any, Sequelize: any) => {
  const Comments = sequelize.define("comments", {
    user_id: Sequelize.INTEGER,
    comment: Sequelize.STRING,
    task_id: Sequelize.INTEGER,
  });

  Comments.belongsTo(User, {
    as: "user",
    foreignKey: {
      name: "user_id",
    },
  });

  Comments.belongsTo(Task, {
    as: "task",
    foreignKey: {
      name: "task_id",
    },
  });

  return Comments;
};

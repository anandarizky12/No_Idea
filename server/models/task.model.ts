export {};
const db = require("./index");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Task extends Model {
    static associate(models: any) {
      Task.hasMany(models.Answer_task, {
        foreignKey: {
          name: "answer_task_id",
        },
      });

      Task.belongsTo(models.Classroom, {
        foreignKey: {
          name: "classroom_id",
        },
      });
    }
  }
  Task.init(
    {
      title: Sequelize.STRING,
      answer_key: Sequelize.STRING,
      deadline: Sequelize.DATE,
      // classroom_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );

  return Task;
};

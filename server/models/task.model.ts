export {};
const db = require("./index");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Task extends Model {
    static associate(models: any) {
      Task.hasMany(models.Question, {
        foreignKey: {
          name: "task_id",
        },
      });

      Task.hasMany(models.Score, {
        foreignKey: {
          name: "task_id",
        },
      });

      Task.belongsTo(models.Classroom, {
        foreignKey: {
          name: "classroom_id",
        },
      });

      Task.belongsTo(models.Mapel, {
        foreignKey: {
          name: "mapel_id",
        },
      });


      Task.hasMany(models.User_Answered_Task, {
        foreignKey: {
          name: "task_id",
        },
      });

      Task.hasMany(models.Task_User_Score, {
        foreignKey: {
          name: "task_id",
        },
      });
    }
  }
  Task.init(
    {
      title: Sequelize.STRING,
      deadline: Sequelize.DATE,
      description: Sequelize.STRING,
      other: Sequelize.STRING,
      // classroom_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );

  return Task;
};

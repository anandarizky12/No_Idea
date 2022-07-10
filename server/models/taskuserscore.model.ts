export {};
const db = require("./index");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Task_User_Score extends Model {
    static associate(models: any) {
     
        Task_User_Score.belongsTo(models.Task, {
        foreignKey: {
          name: "task_id",
        },
      });

    
      Task_User_Score.belongsTo(models.Classroom, {
        foreignKey: {
          name: "classroom_id",
        },
      });

      Task_User_Score.belongsTo(models.User, {
        foreignKey: {
          name: "student_id",
        },
      });
    }
  }
  Task_User_Score.init(
    {
      
      score: Sequelize.INTEGER,
      // classroom_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Task_User_Score",
    }
  );

  return Task_User_Score;
};

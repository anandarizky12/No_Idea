export {};
const db = require("./index");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Score extends Model {
    static associate(models: any) {
      Score.belongsTo(models.Answer_task, {
        foreignKey: {
          name: "answer_id",
          allowNull: false,
        },
      });
      Score.belongsTo(models.Classroom, {
        foreignKey: {
          name: "classroom_id",
          allowNull: false,
        },
      });
      Score.belongsTo(models.Task, {
        foreignKey: {
          name: "task_id",
          allowNull: false,
        },
      });
    }
  }

  Score.init(
    {
      score: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Score",
    }
  );

  return Score;
};

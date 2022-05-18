export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Question extends Model {
    static associate(models: any) {
      Question.hasOne(models.Answer_task, {
        foreignKey: {
          name: "question_id",
          allowNull: false,
        }
      });
      
      Question.belongsTo(models.Task, {
        foreignKey: {
          name: "task_id",
        },
      });
   
    }
  }

  Question.init(
    {
      question: Sequelize.STRING,
      answer_key: Sequelize.STRING,
    
    },
    {
      sequelize,
      modelName: "Question",
    }
  );

  return Question;
};

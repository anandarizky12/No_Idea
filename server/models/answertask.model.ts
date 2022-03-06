export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Answer_task extends Model {
    static associate(models: any) {
      Answer_task.hasMany(models.Score, {
        foreignKey: {
          name: "score_id",
          allowNull: false,
        },
      });
    }
  }
  Answer_task.init(
    {
      // students_id: Sequelize.INTEGER,
      answer: Sequelize.STRING,
      // score_id: Sequelize.INTEGER,
      // task_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Answer_task",
    }
  );

  return Answer_task;
};

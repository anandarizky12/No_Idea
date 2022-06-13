export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class User_Finished_Task extends Model {
    static associate(models: any) {
      User_Finished_Task.belongsTo(models.User,{
        foreignKey: {
          name: "student_id",
        },
      });

      User_Finished_Task.belongsTo(models.Task, {
        foreignKey: {
          name: "task_id",
        },
      });
    }
  }
  User_Finished_Task.init(
    {
      student_id: Sequelize.INTEGER,
      task_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "User_Finished_Task",
    }
  );

  return User_Finished_Task;
};

export {};
const db = require("./index");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Comments extends Model {
    static associate(models: any) {
      Comments.belongsTo(models.User, {
        as: "user",
        foreignKey: {
          name: "user_id",
        },
      });

      Comments.belongsTo(models.Task, {
        as: "task",
        foreignKey: {
          name: "task_id",
        },
      });
    }
  }
  Comments.init(
    {
      user_id: Sequelize.INTEGER,
      comment: Sequelize.STRING,
      task_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};

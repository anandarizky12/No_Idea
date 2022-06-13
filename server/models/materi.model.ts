export {};
const db = require("./index");
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Materi extends Model {
    static associate(models: any) {
      Materi.belongsTo(models.Classroom, {
        as: "classroom",
        foreignKey: {
          name: "classroom_id",
        },
      });
    }
  }
  Materi.init(
    {
        name : sequelize.STRING,
        description : sequelize.STRING,
        file : sequelize.STRING,
        classroom_id : sequelize.INTEGER
    },
    {
      sequelize,
      modelName: "Materi",
    }
  );
  return Materi;
};

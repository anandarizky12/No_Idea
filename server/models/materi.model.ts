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
        name : Sequelize.STRING,
        description : Sequelize.STRING,
        file : Sequelize.STRING,
        classroom_id : Sequelize.INTEGER
    },
    {
      sequelize,
      modelName: "Materi",
    }
  );
  return Materi;
};

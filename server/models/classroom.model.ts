export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Classroom extends Model {
    static associate(models: any) {
      Classroom.belongsToMany(models.Student_Classroom, {
        foreignKey: {
          name: "classroom_id",
        },
      });
    }
  }

  Classroom.init(
    {
      name: Sequelize.STRING,
      teacher_id: Sequelize.INTEGER,
      description: Sequelize.STRING,
      banner: Sequelize.STRING,
      classcode: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Classroom",
    }
  );

  return Classroom;
};

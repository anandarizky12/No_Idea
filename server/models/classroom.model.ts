export {};
const db = require("./index");

const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Classroom extends Model {
    static associate(models: any) {
      Classroom.hasMany(models.User, {
        foreignKey: {
          name: "id",
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
      // members_id: Sequelize.INTEGER,
      // assignment_id: Sequelize.INTEGER,
      // teacher_id: Sequelize.INTEGER,
      //so teacher id is basically the id of the user who created the classroom
      classcode: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Classroom",
    }
  );
  // Classroom.hasMany(User, {
  //   as: "user",
  //   foreignKey: {
  //     name: "members_id",
  //   },
  // });

  return Classroom;
};

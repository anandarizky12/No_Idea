export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Classroom extends Model {
    static associate(models: any) {
      // Classroom.belongsToMany(models.User, {
      //   through: "Student_Classroom",
      //   foreignKey: {
      //     name: "classroom_id",
      //   },
      //   as: "user.id",
      // });
      Classroom.hasMany(models.Student_Classroom, {
        foreignKey: {
          name: "classroom_id",
        }
      });
      Classroom.hasMany(models.Materi, {
        foreignKey: {
          name: "classroom_id",
        },
      });
      Classroom.hasMany(models.Task, {
        foreignKey: {
          name: "classroom_id",
        },
      });
      Classroom.belongsTo(models.User, {
        foreignKey: {
          name: "teacher_id",
        },
      });
      Classroom.hasMany(models.Score, {
        foreignKey: {
          name: "classroom_id",
        },
      });

      Classroom.hasMany(models.Task_User_Score, {
        foreignKey: {
          name: "classroom_id",
        },
      });
    

   
    }
  }

  Classroom.init(
    {
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      banner: Sequelize.STRING,
      classcode: Sequelize.STRING,
      status : Sequelize.ENUM('active', 'off')
    },
    {
      sequelize,
      modelName: "Classroom",
    }
  );

  return Classroom;
};

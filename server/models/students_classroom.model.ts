export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Student_Classroom extends Model {
    static associate(models: any) {
      Student_Classroom.belongsTo(models.Classroom, {
        foreignKey: {
          name: "classroom_id",
        },
      });

      Student_Classroom.belongsTo(models.User, {
        foreignKey: {
          name: "student_id",
        },
      });
    }
  }
  Student_Classroom.init(
    {
      student_id: Sequelize.INTEGER,
      classroom_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Student_Classroom",
    }
  );

  return Student_Classroom;
};

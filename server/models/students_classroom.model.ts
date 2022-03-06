export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Student_Classroom extends Model {}
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

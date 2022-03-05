export {};
const Classroom = require("./classroom.model");

module.exports = (sequelize: any, Sequelize: any) => {
  const Assignment = sequelize.define("assignment", {
    title: Sequelize.STRING,
    assignments: Sequelize.JSON,
    answer_key: Sequelize.STRING,
    creator: Sequelize.STRING,
    classroom: Sequelize.STRING,
  });

  Assignment.belongsTo(Classroom, {
    as: "classrooms",
    foreignKey: {
      name: "classroom",
    },
  });

  return Assignment;
};

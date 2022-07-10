"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Classrooms", [
      {
        name: "IPA Multimedia 2",
        description: "IPA Multimedia 2",
        teacher_id: 2,
        classcode: "x4TyUidR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "IPS Multimedia 2",
        description: "Kelas IPS 2",
        teacher_id: 2,
        classcode: "D4Fr31Dc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Classrooms", null, {});
  },
};

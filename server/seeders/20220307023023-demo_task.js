"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Tasks", [
      {
        title:
          "Tugas IPA 1",
        description:
          "Kerjakan Dengan Hati Hati",
        other: "Tugas Nilai Tambahan IPA",
        deadline: "2023-03-07",
        classroom_id: 1,
        mapel_id: 1,
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nilai Tambahan IPS",
        description:
          "isi singkat, Jawab pertanyaan ini dengan singkat dan jelas",
        other: "Tugas Nilai Tambahan IPS",
        deadline: "2023-03-07",
        classroom_id: 1,
        mapel_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Tasks", [
      {
        title:
          "Ujian IPA",
        description:
          "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
        other: "Tugas Nilai Tambahan IPS",
        deadline: "2023-03-07",
        classroom_id: 1,
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "NIlai Tambahan !",
        description:
          "isi singkat, Jawab pertanyaan ini dengan singkat dan jelas",
        other: "Tugas Nilai Tambahan IPS",
        deadline: "2023-03-07",
        classroom_id: 1,
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};

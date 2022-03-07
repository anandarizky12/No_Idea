"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Tasks", [
      {
        title:
          "Jelaskan Tentang Penyebab Perang antara Rusia dan Ukraina Secara Singkat ? ",
        description:
          "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
        other: "Tugas Nilai Tambahan IPS",
        deadline: "2023-03-07T23:30:23.000Z",
        classroom_id: 1,
        answer_key:
          "Karna Ukraina menolak untuk bergabung bersama Uni Soviet atau Rusia , dan lebih memilih untuk gabung ke NATO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Apa yang dimaksud dengan Hak Veto ? ",
        description:
          "isi singkat, Jawab pertanyaan ini dengan singkat dan jelas",
        other: "Tugas Nilai Tambahan IPS",
        deadline: "2023-03-07T23:30:23.000Z",
        classroom_id: 1,
        answer_key:
          "Hak veto adalah sebuah hak khusus untuk membatalkan sebuah keputusan yang telah di buat ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Mapels", [
      {
        nama : "Fisika",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : "Sejarah Indonesia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : "Bahasa Indonesia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : "Bahasa Inggris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : "Seni Budaya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : "Sistem Komputer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : "Pendidikan Pancasila dan Kewarganegaraan",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Mapels", null, {});
  }
};

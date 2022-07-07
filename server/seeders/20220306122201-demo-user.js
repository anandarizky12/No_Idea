"use strict";


module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Admin",
        phone: "084325567890",
        email: "admin@gmail.com",
        password: "$2b$10$PDDo8s2gaHUXHMxGHcbppedp99lBqSFAp41w9B96GoXE1JEJAUd0.",
        role: "admin",
        profile: null,
     
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Muhammad Zainal",
        phone: "084537285746",
        email: "guru@gmail.com",
        password: "$2b$10$PDDo8s2gaHUXHMxGHcbppedp99lBqSFAp41w9B96GoXE1JEJAUd0.",
        role: "guru",
        profile: null,
   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Renaldi Siswanto",
        phone: "083467352617",
        email: "siswa@gmail.com",
        password: "$2b$10$PDDo8s2gaHUXHMxGHcbppedp99lBqSFAp41w9B96GoXE1JEJAUd0.",
        role: "siswa",
        profile: null,
     
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

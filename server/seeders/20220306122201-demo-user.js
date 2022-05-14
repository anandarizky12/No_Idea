"use strict";
import bycrypt from 'bcrypt';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Usram Bin Ahmed",
        phone: "0123456789",
        email: "usram@gmail.com",
        password: bycrypt("12345678"),
        role: "guru",
        profile: null,
        no_induk: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ali Mahmud",
        phone: "0123456789",
        email: "Ali@gmail.com",
        password: bycrypt("12345678"),
        role: "siswa",
        profile: null,
        no_induk: "124323423",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mahmud Bin Ali",
        phone: "0123456789",
        email: "mahmud@gmail.com",
        password: bycrypt("12345678"),
        role: "siswa",
        profile: null,
        no_induk: "12345678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

export {};
const db = require("./index");
const User = db.user;

module.exports = (sequelize: any, Sequelize: any) => {
  const Score = sequelize.define("scores", {
    score: Sequelize.INTEGER,
  });

  return Score;
};

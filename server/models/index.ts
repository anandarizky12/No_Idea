const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.ts");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db: any = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./user.model.ts")(sequelize, Sequelize);
module.exports = db;

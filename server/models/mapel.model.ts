export {};
const { Model } = require("sequelize");

module.exports = (sequelize: any, Sequelize: any) => {
  class Mapel extends Model {
    static associate(models: any) {
      Mapel.hasMany(models.Task, {
        foreignKey: {
          name: "mapel_id",
        },
      });
    
    }
  }

  Mapel.init(
    {
      nama: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Mapel",
    }
  );

  return Mapel;
};

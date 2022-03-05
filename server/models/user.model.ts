module.exports = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define("users", {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  });

  return User;
};

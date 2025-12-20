module.exports = (sequelize, Sequelize) => {
  const Partner = sequelize.define("Partner", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    logo: { type: Sequelize.STRING },
    website: { type: Sequelize.STRING }
  }, {
    tableName: "partners"
  });

  

  return Partner;
};
module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("Service", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    icon: { type: Sequelize.STRING }
  }, {
    tableName: "services"
  });

  

  return Service;
};
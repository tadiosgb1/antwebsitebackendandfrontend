module.exports = (sequelize, Sequelize) => {
  const Subscriber = sequelize.define("Subscriber", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: Sequelize.STRING },
    subscribed_at: { type: Sequelize.DATE }
  }, {
    tableName: "subscribers"
  });

  

  return Subscriber;
};
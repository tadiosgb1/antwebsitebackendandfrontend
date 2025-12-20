module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("Contact", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    message: { type: Sequelize.STRING },
    sent_at: { type: Sequelize.DATE }
  }, {
    tableName: "contacts"
  });

  

  return Contact;
};
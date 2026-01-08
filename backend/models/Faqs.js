module.exports = (sequelize, Sequelize) => {
  const Faqs = sequelize.define("Faqs", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    question: { type: Sequelize.STRING },
    answer: { type: Sequelize.STRING },
    is_active: { type: Sequelize.BOOLEAN },
    order: { type: Sequelize.INTEGER }
  }, {
    tableName: "faks"
  });

  

  return Faqs;
};
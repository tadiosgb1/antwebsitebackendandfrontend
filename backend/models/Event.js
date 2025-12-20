module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("Event", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    video: { type: Sequelize.STRING },
    start_date: { type: Sequelize.DATE },
    end_date: { type: Sequelize.DATE },
    category_id: { type: Sequelize.INTEGER, references: { model: "categories", key: "id" } },
    published_at: { type: Sequelize.DATE }
  }, {
    tableName: "events"
  });

  Event.associate = (db) => {
    Event.belongsTo(db.Category, { foreignKey: "category_id" });
  };

  return Event;
};
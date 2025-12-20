module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define("News", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    video: { type: Sequelize.STRING },
    category_id: { type: Sequelize.INTEGER, references: { model: "categories", key: "id" } },
    published_at: { type: Sequelize.DATE }
  }, {
    tableName: "news"
  });

  News.associate = (db) => {
    News.belongsTo(db.Category, { foreignKey: "category_id" });
  };

  return News;
};
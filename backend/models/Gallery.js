module.exports = (sequelize, Sequelize) => {
  const Gallery = sequelize.define("Gallery", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    category_id: { type: Sequelize.INTEGER, references: { model: "categories", key: "id" } }
  }, {
    tableName: "gallery"
  });

  Gallery.associate = (db) => {
    Gallery.belongsTo(db.Category, { foreignKey: "category_id" });
  };

  return Gallery;
};
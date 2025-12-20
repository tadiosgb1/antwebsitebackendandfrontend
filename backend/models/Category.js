module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("Category", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING }
  }, {
    tableName: "categories"
  });

  

  return Category;
};
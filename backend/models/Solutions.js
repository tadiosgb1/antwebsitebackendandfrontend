module.exports = (sequelize, Sequelize) => {
  const Solutions = sequelize.define("Solutions", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
    summary: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    technologies: { type: Sequelize.STRING },
    industry: { type: Sequelize.STRING },
    thumbnail: { type: Sequelize.STRING },
    demo_url: { type: Sequelize.STRING },
    is_active: { type: Sequelize.BOOLEAN },
    sort_order: { type: Sequelize.INTEGER }
  }, {
    tableName: "solutions"
  });

  

  return Solutions;
};
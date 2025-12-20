module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("Team", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    role: { type: Sequelize.STRING },
    photo: { type: Sequelize.STRING },
    facebook: { type: Sequelize.STRING },
    linkedin: { type: Sequelize.STRING },
    instagram: { type: Sequelize.STRING },
    twitter: { type: Sequelize.STRING },
    telegram: { type: Sequelize.STRING }
  }, {
    tableName: "teams"
  });

  

  return Team;
};
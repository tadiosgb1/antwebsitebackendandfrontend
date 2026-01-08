module.exports = (sequelize, Sequelize) => {
  const JobPosts = sequelize.define("JobPosts", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    location: { type: Sequelize.STRING },
    employment_type: { type: Sequelize.STRING },
    experience_level: { type: Sequelize.STRING },
    salary_min: { type: Sequelize.INTEGER },
    salary_max: { type: Sequelize.INTEGER },
    vacancies: { type: Sequelize.INTEGER },
    deadline: { type: Sequelize.DATE },
    is_active: { type: Sequelize.BOOLEAN }
  }, {
    tableName: "job_posts"
  });

  

  return JobPosts;
};
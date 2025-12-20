module.exports = (sequelize, Sequelize) => {
  const Testimonial = sequelize.define("Testimonial", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    position: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    avatar: { type: Sequelize.STRING }
  }, {
    tableName: "testimonials"
  });

  

  return Testimonial;
};
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    resetToken: DataTypes.STRING,
    resetTokenExpiry: DataTypes.DATE
  });

  User.associate = models => {
    User.belongsToMany(models.Role, { through: "UserRoles" });
    User.belongsToMany(models.Permission, { through: "UserPermissions" });
  };

  return User;
};
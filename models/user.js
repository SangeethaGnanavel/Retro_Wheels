const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection"); // Replace "../config/connection" with the correct path
const bcrypt = require("bcrypt");

class User extends Model {
  // Method to check the user's password
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    hooks: {
      async beforeCreate(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = User;


const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Type extends Model {}

Type.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "types",
  }
);

module.exports = Type;

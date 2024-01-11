const Car = require("./car");
const Type = require("./type");
const Brand = require("./brand");
const User = require("./user");

Car.belongsTo(Type, { foreignKey: "type_id" });
Car.belongsTo(Brand, { foreignKey: "brand_id" });
Car.belongsTo(User, { foreignKey: "user_id" });

Type.hasMany(Car, { foreignKey: "type_id" });
Brand.hasMany(Car, { foreignKey: "brand_id" });
User.hasMany(Car, { foreignKey: "user_id" });

module.exports = {Car, Type, Brand, User };
const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Expenses = sequelize.define("expenses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: DataTypes.DATEONLY,
  category: DataTypes.STRING,
  description: DataTypes.STRING,
  amount: DataTypes.DECIMAL(10, 2),
});

module.exports = Expenses;

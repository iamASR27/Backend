const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const OrderItem = sequelize.define('orderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  quantity: DataTypes.INTEGER,
});

module.exports = OrderItem;


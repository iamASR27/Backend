const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('node-project', 'root', 'nodeproject', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
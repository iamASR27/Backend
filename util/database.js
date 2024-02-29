// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-project',
//     password: 'nodeproject'
// });

// module.exports = pool.promise();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-project', 'root', 'nodeproject', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
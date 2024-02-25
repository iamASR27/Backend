const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-project',
    password: 'nodeproject'
});

module.exports = pool.promise();
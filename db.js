const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_db_user',
    password: 'your_db_password',
    database: 'PressSure',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool.promise();

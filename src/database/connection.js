const mysql = require('mysql2');

const connection = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB,
    host: process.env.DB_HOST
});

module.exports = connection;
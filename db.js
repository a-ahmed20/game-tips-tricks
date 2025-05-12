const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    // host: 'local', // Use this instead of localhost
    host: 'host.docker.internal',
    user: 'root',
    password: 'password',
    database: 'FORTNITE_COMMUNITY',
    port: 3306, // Optional, since 3306 is default
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
const mysql = require('mysql2');

// Directly define database credentials
const pool = mysql.createPool({
    host: 'localhost',   // Change if needed
    user: 'root',        // Your MySQL username
    password: '',        // Your MySQL password (leave empty if no password)
    database: 'fortnite_tips', // Your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export connection as a promise
module.exports = pool.promise();

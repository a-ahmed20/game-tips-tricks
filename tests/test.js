const pool = require('../models/db'); // Import the database connection

async function testConnection() {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result'); // Simple test query
        console.log('✅ MySQL Connected Successfully! Result:', rows[0].result);
    } catch (error) {
        console.error('❌ MySQL Connection Failed:', error);
    } finally {
        process.exit(); // Exit script after test
    }
}

testConnection();

const pool = require('./db');
const bcrypt = require('bcryptjs');

class User {
    static async create(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        await pool.query(sql, [username, email, hashedPassword]);
        return { username, email };
    }

    static async findByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await pool.query(sql, [email]);
        return rows.length > 0 ? rows[0] : null;
    }
}

module.exports = User;

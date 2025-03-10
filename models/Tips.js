const pool = require('./db');

class Tip {
    static async create(user_id, title, description, category) {
        const sql = 'INSERT INTO tips (user_id, title, description, category) VALUES (?, ?, ?, ?)';
        await pool.query(sql, [user_id, title, description, category]);
    }

    static async getAll() {
        const sql = 'SELECT tips.*, users.username FROM tips JOIN users ON tips.user_id = users.id ORDER BY created_at DESC';
        const [rows] = await pool.query(sql);
        return rows;
    }

    static async getById(id) {
        const sql = 'SELECT * FROM tips WHERE id = ?';
        const [rows] = await pool.query(sql, [id]);
        return rows[0];
    }
}

module.exports = Tip;

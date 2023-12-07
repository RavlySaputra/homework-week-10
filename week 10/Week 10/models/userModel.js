const pool = require('../db');

class UserModel {
  async getAllUsers() {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
  }

  async getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  async createUser({ id, gender, email, password, role }) {
    const query = 'INSERT INTO users (id, gender, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const { rows } = await pool.query(query, [id, gender, email, password, role]);
    return rows[0];
  }

  async updateUser(id, { gender, email, password, role }) {
    const query = 'UPDATE users SET gender = $1, email = $2, password = $3, role = $4 WHERE id = $5 RETURNING *';
    const { rows } = await pool.query(query, [gender, email, password, role, id]);
    return rows[0];
  }

  async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = new UserModel();
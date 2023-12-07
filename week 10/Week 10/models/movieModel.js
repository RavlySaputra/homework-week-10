const pool = require('../db');

class MovieModel {
  async getAllMovies() {
    const query = 'SELECT * FROM movies';
    const { rows } = await pool.query(query);
    return rows;
  }

  async getMovieById(id) {
    const query = 'SELECT * FROM movies WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  async createMovie({ id, title, genres, year, photo }) {
    const query = 'INSERT INTO movies (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const { rows } = await pool.query(query, [id, title, genres, year, photo]);
    return rows[0];
  }

  async updateMovie(id, { title, genres, year, photo }) {
    const query = 'UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE id = $5 RETURNING *';
    const { rows } = await pool.query(query, [title, genres, year, photo, id]);
    return rows[0];
  }

  async deleteMovie(id) {
    const query = 'DELETE FROM movies WHERE id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = new MovieModel();
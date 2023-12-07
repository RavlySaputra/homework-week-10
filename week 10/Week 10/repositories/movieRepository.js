const movieModel = require('../models/movieModel');

class MovieRepository {
  async getAllMovies() {
    return movieModel.getAllMovies();
  }

  async getMovieById(id) {
    return movieModel.getMovieById(id);
  }

  async createMovie({ id, title, genres, year, photo }) {
    return movieModel.createMovie({ id, title, genres, year, photo });
  }

  async updateMovie(id, { title, genres, year, photo }) {
    return movieModel.updateMovie(id, { title, genres, year, photo });
  }

  async deleteMovie(id) {
    return movieModel.deleteMovie(id);
  }
}

module.exports = new MovieRepository();
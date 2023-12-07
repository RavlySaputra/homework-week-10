const movieRepository = require('../repositories/movieRepository');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieRepository.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movies.' });
  }
};

exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await movieRepository.getMovieById(id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: 'Movie tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil detail movie.' });
  }
};

exports.createMovie = async (req, res) => {
  const { id, title, genres, year, photo } = req.body;
  try {
    const newMovie = await movieRepository.createMovie({ id, title, genres, year, photo });
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat membuat movie baru.' });
  }
};

exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genres, year, photo } = req.body;
  try {
    const existingMovie = await movieRepository.getMovieById(id);
    if (existingMovie) {
    }

    const updatedMovie = await movieRepository.updateMovie(id, { title, genres, year, photo });
    if (updatedMovie) {
      res.status(200).json(updatedMovie);
    } else {
      res.status(404).json({ error: 'Movie tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat memperbarui movie.' });
  }
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await movieRepository.deleteMovie(id);
    if (deletedMovie) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Movie tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat menghapus movie.' });
  }
};

exports.uploadPhoto = async (req, res) => {
  try {
    if (req.file) {
      const photoFilename = req.file.filename;
      const photoPath = `uploads/${photoFilename}`;
      res.sendFile(photoPath, { root: __dirname });
  } else {
    res.status(400).send('No photo uploaded');
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengunggah foto.' });
  }
};
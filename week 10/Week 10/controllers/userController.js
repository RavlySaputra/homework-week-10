const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data users.' });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRepository.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil detail user.' });
  }
};

exports.createUser = async (req, res) => {
  const { id, gender, email, password, role } = req.body;
  try {
    const newUser = await userRepository.createUser({ id, gender, email, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat membuat user baru.' });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { gender, email, password, role } = req.body;
  try {
    const updatedUser = await userRepository.updateUser(id, { gender, email, password, role });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'User tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat memperbarui user.' });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userRepository.deleteUser(id);
    if (deletedUser) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User tidak ditemukan.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat menghapus user.' });
  }
};
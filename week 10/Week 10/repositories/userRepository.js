const userModel = require('../models/userModel');

class UserRepository {
  async getAllUsers() {
    return userModel.getAllUsers();
  }

  async getUserById(id) {
    return userModel.getUserById(id);
  }

  async createUser({ id, gender, email, password, role }) {
    return userModel.createUser({ id, gender, email, password, role });
  }

  async updateUser(id, { gender, email, password, role }) {
    return userModel.updateUser(id, { gender, email, password, role });
  }

  async deleteUser(id) {
    return userModel.deleteUser(id);
  }
}

module.exports = new UserRepository();
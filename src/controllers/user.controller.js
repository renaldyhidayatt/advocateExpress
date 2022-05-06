const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
} = require("../services/user.service");

class UserController {
  async getUsers(req, res) {
    const users = getUsers();
    return res.json({
      status: "success",
      data: users,
    });
  }
  async getById(req, res) {
    const user = getUserById(req.params.id);
    if (!user) return res.status(400).send("User not found");
    return res.json({
      status: "success",
      data: user,
    });
  }
  async create(req, res) {
    const user = await userfindUsername(req.body.username);
    if (!user != null) return res.status(400).send("Username already exists");
    await createUser(req.body);

    return res.json({
      status: "success",
      message: "User created successfully",
    });
  }
  async update(req, res) {
    const user = updateUser(req.params.id, req.body);
    if (!user) return res.status(400).send("User not found");
    return res.json({
      status: "success",
      message: "User updated successfully",
      data: user,
    });
  }
  async delete(req, res) {
    const user = deleteUser(req.params.id);
    if (!user) return res.status(400).send("User not found");
    return res.json({
      status: "success",
      message: "User deleted successfully",
      data: user,
    });
  }
}

module.exports = new UserController();

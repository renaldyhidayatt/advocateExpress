const { createUser, userfindUsername } = require("../services/user.service");
const PasswordUtils = require("../utils/hash");
const TokenUtils = require("../utils/jwt");

class AuthController {
  async login(req, res) {
    const user = await userfindUsername(req.body.username);

    if (
      !user ||
      PasswordUtils.comparePassword(req.body.password, user.password)
    ) {
      return res.status(400).send("Invalid username or password");
    }
    const token = TokenUtils.createToken(user._id);
    return res.json({
      status: "success",
      token: token,
    });
  }
  async register(req, res) {
    const user = await userfindUsername(req.body.username);
    if (!user != null) return res.status(400).send("Username already exists");
    await createUser(req.body);

    return res.json({
      status: "success",
      message: "User created successfully",
    });
  }
}

module.exports = new AuthController();

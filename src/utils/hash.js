const bcrypt = require("bcryptjs");

class PasswordHash {
  hashPassword = (password) => {
    return bcrypt.hash(password, 10);
  };
  comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
  };
}

module.exports = new PasswordHash();

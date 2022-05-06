const jwt = require("jsonwebtoken");

class TokenJwt {
  createToken(payload) {
    return jwt.sign(payload, "secretkey", { expiresIn: "1h" });
  }
  verifyToken(token) {
    return jwt.verify(token, "secretkey");
  }
}

module.exports = new TokenJwt();

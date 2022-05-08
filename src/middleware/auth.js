module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        const error = new Error("Invalid Token");
        error.status = 401;
        next(error);
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: "No token provided",
    });
  }
};

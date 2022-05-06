const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadPdfOrDocs = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .pdf and .doc files are allowed!"));
    }
  },
});

const uploadImage = multer({
  storage,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png and .jpg files are allowed!"));
    }
  },
});

module.exports = {
  uploadPdfOrDocs,
  uploadImage,
};

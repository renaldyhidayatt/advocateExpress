const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv/config");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(`${process.env.CONNECT_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("we are using mongoose");
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

require("./routes/index.routes")(app);

app.listen(port, () => {
  console.log("Example app listening on port 5000!");
});

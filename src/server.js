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

app.use("/api/v1/acts", require("./routes/act.routes"));
app.use("/api/v1/contact", require("./routes/contact.routes"));
app.use("/api/v1/appointments", require("./routes/appointment.routes"));
app.use("/api/v1/casecategories", require("./routes/case_categories.routes"));
app.use("/api/v1/casestages", require("./routes/case_stages.routes"));
app.use("/api/v1/casestudy", require("./routes/case_study.routes"));

app.listen(port, () => {
  console.log("Example app listening on port 5000!");
});

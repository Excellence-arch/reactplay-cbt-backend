const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(cors());

mongoose.connect(process.env.URI, (err) => {
  if (err) {
    console.log(`An error occurred`);
  } else {
    console.log(`Connection to database established`);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});

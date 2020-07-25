const express = require("express");
const app = express();
const mongoose = require("./config/db");
var db = mongoose.connection;
const cors = require("cors");
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log(`we're connected!`);
});

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, (req, res) => {
  console.log("port is running");
});

app.get("/", (req, res) => {
  res.send({ message: "we are on server.js" });
});

app.use("/", require("./routes"));

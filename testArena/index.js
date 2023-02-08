const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/users");
const port = 3500;

mongoose
  .connect("mongodb://localhost/test")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

app.use("/user-data", users);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

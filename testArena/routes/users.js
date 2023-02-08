var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: [],
}); /* GET users listing. */

const UserData = mongoose.model("UserData", userSchema);

router.get("/", async function (req, res, next) {
  const userData = await UserData.find().sort("name");
  res.send(userData);
});

router.post("/", async function (req, res, next) {
  let userData = new UserData({
    name: req.body.name,
    data: req.body.data,
  });

  userData = await userData.save();

  res.send(userData);
});

module.exports = router;

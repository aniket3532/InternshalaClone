const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: String,
  ip: String,
  browser: String,
  os: String,
  platform: String,
  deviceType: String,
  timestamp: Date,
});

module.exports = mongoose.model("Login", loginSchema);

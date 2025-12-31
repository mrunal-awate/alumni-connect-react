const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema({
  name: String,
  email: String,
  graduationYear: Number,
  branch: String,
  company: String,
  role: String,
  location: String,
  linkedin: String,
});

module.exports = mongoose.model("Alumni", AlumniSchema);

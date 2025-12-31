const express = require("express");
const Alumni = require("../models/Alumni");
const router = express.Router();

router.get("/", async (req, res) => {
  const alumni = await Alumni.find();
  res.json(alumni);
});

module.exports = router;

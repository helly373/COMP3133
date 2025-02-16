const express = require("express");
const User = require("../models/User");
const router = express.Router();

// POST API to insert user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

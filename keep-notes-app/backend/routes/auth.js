const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create(username, hashedPassword, (err) => {
    if (err)
      return res.status(500).send("There was a problem registering the user.");
    res.status(200).send("User registered successfully!");
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, user) => {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ id: user.id }, "supersecret", {
      expiresIn: 86400,
    });
    res.status(200).send({ auth: true, token });
  });
});

module.exports = router;

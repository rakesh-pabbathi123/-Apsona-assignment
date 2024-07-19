const express = require("express");
const Note = require("../models/Notes");
const router = express.Router();

router.post("/create", (req, res) => {
  const { title, content, tags, backgroundColor } = req.body;
  Note.create(title, content, tags, backgroundColor, (err) => {
    if (err)
      return res.status(500).send("There was a problem creating the note.");
    res.status(200).send("Note created successfully!");
  });
});

router.get("/", (req, res) => {
  Note.getAll((err, notes) => {
    if (err)
      return res.status(500).send("There was a problem getting the notes.");
    res.status(200).send(notes);
  });
});

module.exports = router;

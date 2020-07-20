const express = require("express");
const router = express.Router();
const validateSession = require("../middleware/validate-session"); //makes sure you "own" your data, must have token to use
const Log = require("../db").import("../models/log");

router.get("/practice", validateSession, function (req, res) {
  res.send("Hey! This is a practice route!");
});

//* **CREATE LOG** *//
router.post("/create", validateSession, (req, res) => {
  const logEntry = {
    title: req.body.log.title,
    date: req.body.log.date,
    entry: req.body.log.entry,
    owner: req.user.id,
  };
  Log.create(logEntry)
    .then((log) => res.status(200).json(log))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;

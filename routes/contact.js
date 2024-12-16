const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact/contact.ejs");
});

module.exports = router;

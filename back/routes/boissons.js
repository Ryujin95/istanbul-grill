const express = require("express");
const router = express.Router();
const boissons = require("../model/Boissons");

// Là tu renvoies directement les boissons
router.get("/boissons", (req, res) => {
  res.json(boissons);
});

module.exports = router;

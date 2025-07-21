const express = require("express");
const router = express.Router();

const { getAssiettes } = require("../model/Assiettes"); // le chemin peut être à adapter

// Route GET /car/assiettes
router.get("/assiettes", getAssiettes);

module.exports = router;


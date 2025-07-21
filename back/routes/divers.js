const express = require("express");
const router = express.Router();

const divers = require("../model/Divers");

router.get("/divers", (req, res) => {
    res.json(divers);
});

module.exports = router;

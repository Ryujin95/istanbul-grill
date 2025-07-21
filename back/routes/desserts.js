const express = require("express");
const router = express.Router();
const desserts = require("../model/Desserts");

router.get("/desserts", (req, res) => {
    res.json(desserts);
});

module.exports = router;

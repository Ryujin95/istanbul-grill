const express = require("express");
const router = express.Router();

const { getmodel } = require("../model/Sandwich");

router.get("/sandwich", getmodel); // /car/sandwichs

module.exports = router;

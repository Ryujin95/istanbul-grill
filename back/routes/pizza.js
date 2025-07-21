const express = require("express");
const router = express.Router();

const pizzas = require("../model/Pizzas");

router.get("/pizzas", (req, res) => {
    res.json(pizzas);
});

module.exports = router;

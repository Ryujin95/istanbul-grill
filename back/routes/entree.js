const express = require('express');
const path = require('path');
const router = express.Router();
const entrees = require('../model/Entree');

// Route GET pour toutes les entrées/salades
router.get('/entree', (req, res) => {
  res.json(entrees);
});

// Route GET pour les images
router.get('/image/entree/:imageName', (req, res) => {
  const imagePath = path.join(__dirname, '../image/entree', req.params.imageName);
  res.sendFile(imagePath);
});

module.exports = router;

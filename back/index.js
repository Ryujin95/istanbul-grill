const express = require('express');
const path = require('path');
const cors = require('cors');

const sandwichRouter = require("./routes/sandwich");
const entreeRoutes = require("./routes/entree");
const assiettesRoutes = require("./routes/assiettes");
const boissonsRoutes = require("./routes/boissons");
const dessertRoutes = require("./routes/desserts");
const pizzaRoutes = require("./routes/pizza");  // <-- Ajout ici
const diversRoutes = require("./routes/divers");

const app = express();

// CORS
const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));

// Accès aux images
app.use('/image', express.static(path.join(__dirname, 'image')));

// Routes
app.use("/car", sandwichRouter);
app.use("/car", entreeRoutes);
app.use("/car", assiettesRoutes);
app.use("/car", boissonsRoutes);
app.use("/car", dessertRoutes);
app.use("/car", pizzaRoutes);  // <-- Ajout ici
app.use("/car", diversRoutes);

app.listen(3001, () => {
    console.log("L'API est bien lancée sur http://localhost:3001");
});

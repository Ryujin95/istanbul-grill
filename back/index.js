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
const port = process.env.PORT || 3001;

// CORS
const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "100kb" }));

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

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use((_req, res) => {
    res.status(404).json({ error: "Route introuvable" });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`L'API est bien lancée sur le port ${port}`);
    });
}

module.exports = app;

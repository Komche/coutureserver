const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const clientRoutes = require("./routes/client.routes");
const paiementRoutes = require("./routes/paiement.routes");
const tacheRoutes = require("./routes/tache.routes");
const suivitacheRoutes = require("./routes/suivitache.routes");
const employeRoutes = require("./routes/employe.routes");
const commandeRoutes = require("./routes/commande.routes");
const mesureFormatRoutes = require("./routes/mesure-format.routes");
const mesureRoutes = require("./routes/mesure.routes");
const tissusRoutes = require("./routes/tissus.routes");
const modeleRoutes = require("./routes/modele.routes");
const cors = require("cors");
const { insertDataSQL, updateDataSQL } = require("./services/utils");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// middleware pour parser les requêtes en json
app.use(bodyParser.json());

// middleware pour logger toutes les requêtes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// route pour la gestion des utilisateurs
app.use("/clients", clientRoutes);
app.use("/paiements", paiementRoutes);
app.use("/taches", tacheRoutes);
app.use("/suivitaches", suivitacheRoutes);
app.use("/employes", employeRoutes);
app.use("/mesureFormats", mesureFormatRoutes);
app.use("/mesures", mesureRoutes);
app.use("/commandes", commandeRoutes);
app.use("/tissus", tissusRoutes);
app.use("/modeles", modeleRoutes);

// démarrer le servuer
app.listen(port, () => {
  console.log(
    "Serveur démarrer sur le port : ",
    port
  );
});

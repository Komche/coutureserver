const tissusService = require('../services/tissus.service');

module.exports = {
    createTissus: (req, res) => {
        tissus = req.body;
        tissusService.createTissus(tissus, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({ message: "Erreur lors de l'insertion de données",  error });
            } else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({ message: "Donnée insérer avec succès ", id: result.insertId })
            }
        });
    },
    updateTissus: (req, res) => {
        tissus = req.body;
        tissusService.updateTissus(tissus, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({ message: "Erreur lors de la modification de données", error });
            } else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({ message: "Donnée modifier avec succès ", result, id: result.insertId })
            }
        });
    },
    getAllTissus: (req, res) => {
        tissusService.getAllTissus( (error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des tissus : ", error);
                res.status(500).json({ message: "Erreur lors de la récupération de la liste", error });
            } else {
                console.log("Tissus recupérer avec succès");
                res.status(200).json({ message: "Tissus recupérer avec succès ", result, })
            }
        });
    },
};

const modeleService = require('../services/modele.service');

module.exports = {
    createModele: (req, res) => {
        modele = req.body;
        modeleService.createModele(modele, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({ message: "Erreur lors de l'insertion de données",  error });
            } else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({ message: "Donnée insérer avec succès ", id: result.insertId })
            }
        });
    },
    updateModele: (req, res) => {
        modele = req.body;
        modeleService.updateModele(modele, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({ message: "Erreur lors de la modification de données", error });
            } else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({ message: "Donnée modifier avec succès ", result, id: result.insertId })
            }
        });
    },
    getAllModele: (req, res) => {
       
        modeleService.getAllModele((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des modeles : ", error);
                res.status(500).json({ message: "Erreur lors de la récupération de la liste", error });
            } else {
                console.log("Modele recupérer avec succès");
                res.status(200).json({ message: "Modele recupérer avec succès ", result, })
            }
        });
    },
};

const paiementService = require('../services/paiement.service');

module.exports = {
    createPaiement: (req, res) => {
        paiement = req.body;
        paiementService.createPaiement(paiement, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès "})
            }
        });
    },
    updatePaiement: (req, res) => {
        paiement = req.body;
        paiementService.updatePaiement(paiement, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    getAllPaiement: (req, res) => {
        paiement = req.body;
        paiementService.getAllPaiement((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des paiements : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("Paiement recupérer avec succès");
                res.status(200).json({message : "Paiement recupérer avec succès ", result,})
            }
        });
    },
};

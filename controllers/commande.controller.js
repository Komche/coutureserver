const commandeService = require('../services/commande.service');

module.exports = {
    createCommande: (req, res) => {
        commande = req.body;
        commandeService.createCommande(commande, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès "})
            }
        });
    },
    updateCommande: (req, res) => {
        commande = req.body;
        commandeService.updateCommande(commande, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    validateCommande: (req, res) => {
        commande = req.body;
        commandeService.validateCommande(commande, (error, result) => {
            if (error) {
                console.error("Erreur lors du de la validation de la commande : ", error);
                res.status(500).json({message : "Erreur lors du de la validation de la commande", error});
            }else {
                console.log("Donnée valider avec succès");
                res.status(200).json({message : "Donnée valider avec succès ", result,})
            }
        });
    },
    getAllCommande: (req, res) => {
        commandeService.getAllCommande((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des commandes : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("Commande recupérer avec succès");
                res.status(200).json({message : "Commande recupérer avec succès ", result,})
            }
        });
    },
    countCommade: (req, res) => {
        commandeService.countCommade((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des commandes : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("NUM Commande recupérer avec succès");
                res.status(200).json({message : "NUM Commande recupérer avec succès ", result,})
            }
        });
    },
};

const suivitacheService = require('../services/suivitache.service');

module.exports = {
    createSuivitache: (req, res) => {
        suivitache = req.body;
        suivitacheService.createSuivitache(suivitache, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès "})
            }
        });
    },
    updateSuivitache: (req, res) => {
        suivitache = req.body;
        suivitacheService.updateSuivitache(suivitache, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    getAllSuivitache: (req, res) => {
        suivitache = req.body;
        suivitacheService.getAllSuivitache((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des suivitaches : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("Suivitache recupérer avec succès");
                res.status(200).json({message : "Suivitache recupérer avec succès ", result,})
            }
        });
    },
};

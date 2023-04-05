const tacheService = require('../services/tache.service');

module.exports = {
    createTache: (req, res) => {
        tache = req.body;
        tacheService.createTache(tache, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès ",  id: result.insertId })
            }
        });
    },
    updateTache: (req, res) => {
        tache = req.body;
        tacheService.updateTache(tache, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    getAllTache: (req, res) => {
        tache = req.body;
        tacheService.getAllTache((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des taches : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("Tache recupérer avec succès");
                res.status(200).json({message : "Tache recupérer avec succès ", result,})
            }
        });
    },
};

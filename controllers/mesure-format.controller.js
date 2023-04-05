const mesureFormatService = require('../services/mesure-format.service');

module.exports = {
    createMesureFormat: (req, res) => {
        mesure_format = req.body;
        mesureFormatService.createMesureFormat(mesure_format, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès "})
            }
        });
    },
    updateMesureFormat: (req, res) => {
        mesure_format = req.body;
        mesureFormatService.updateMesureFormat(mesure_format, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    getAllMesureFormat: (req, res) => {
        mesure_format = req.body;
        mesureFormatService.getAllMesureFormat((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des mesures format : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("MesureFormat recupérer avec succès");
                res.status(200).json({message : "MesureFormat recupérer avec succès ", result,})
            }
        });
    },
};

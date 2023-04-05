const employeService = require('../services/employe.service');

module.exports = {
    createEmploye: (req, res) => {
        employe = req.body;
        employeService.createEmploye(employe, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès "})
            }
        });
    },
    updateEmploye: (req, res) => {
        employe = req.body;
        employeService.updateEmploye(employe, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    getAllEmploye: (req, res) => {
        employe = req.body;
        employeService.getAllEmploye((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des employes : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("Employe recupérer avec succès");
                res.status(200).json({message : "Employe recupérer avec succès ", result,})
            }
        });
    },
};

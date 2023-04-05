const clientService = require('../services/client.service');

module.exports = {
    createClient: (req, res) => {
        client = req.body;
        clientService.createClient(client, (error, result) => {
            if (error) {
                console.error("Erreur lors de l'insertion de données : ", error);
                res.status(500).json({message : "Erreur lors de l'insertion de données", error});
            }else {
                console.log("Donnée insérer avec succès");
                res.status(200).json({message : "Donnée insérer avec succès "})
            }
        });
    },
    updateClient: (req, res) => {
        client = req.body;
        clientService.updateClient(client, (error, result) => {
            if (error) {
                console.error("Erreur lors de la modification de données : ", error);
                res.status(500).json({message : "Erreur lors de la modification de données", error});
            }else {
                console.log("Donnée modifier avec succès");
                res.status(200).json({message : "Donnée modifier avec succès ", result,})
            }
        });
    },
    getAllClient: (req, res) => {
        client = req.body;
        clientService.getAllClient((error, result) => {
            if (error) {
                console.error("Erreur lors de la récupération de la liste des clients : ", error);
                res.status(500).json({message : "Erreur lors de la récupération de la liste", error});
            }else {
                console.log("Client recupérer avec succès");
                res.status(200).json({message : "Client recupérer avec succès ", result,})
            }
        });
    },
};

const commandeDao = require("../data-access/commande.dao");


module.exports = {
  createCommande : (commande, callback) => {
    commandeDao.createCommande(commande, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateCommande : (commande, callback) => {
    commandeDao.updateCommande(commande, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  validateCommande : (commande, callback) => {
    commandeDao.validateCommande(commande, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllCommande : (callback) => {
    commandeDao.getAllCommande((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  countCommade : (callback) => {
    commandeDao.countCommade((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
};

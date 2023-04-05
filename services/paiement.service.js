const paiementDao = require("../data-access/paiement.dao");


module.exports = {
  createPaiement : (paiement, callback) => {
    paiementDao.createPaiement(paiement, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updatePaiement : (paiement, callback) => {
    paiementDao.updatePaiement(paiement, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllPaiement : (callback) => {
    paiementDao.getAllPaiement((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

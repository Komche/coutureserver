const modeleDao = require("../data-access/modele.dao");


module.exports = {
  createModele : (modele, callback) => {
    modeleDao.createModele(modele, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateModele : (modele, callback) => {
    modeleDao.updateModele(modele, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllModele : (callback) => {
    modeleDao.getAllModele((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

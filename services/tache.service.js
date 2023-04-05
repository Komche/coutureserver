const tacheDao = require("../data-access/tache.dao");


module.exports = {
  createTache : (tache, callback) => {
    tacheDao.createTache(tache, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateTache : (tache, callback) => {
    tacheDao.updateTache(tache, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllTache : (callback) => {
    tacheDao.getAllTache((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

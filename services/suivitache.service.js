const suivitacheDao = require("../data-access/suivitache.dao");


module.exports = {
  createSuivitache : (suivitache, callback) => {
    suivitacheDao.createSuivitache(suivitache, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateSuivitache : (suivitache, callback) => {
    suivitacheDao.updateSuivitache(suivitache, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllSuivitache : (callback) => {
    suivitacheDao.getAllSuivitache((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

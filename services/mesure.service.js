const mesureDao = require("../data-access/mesure.dao");


module.exports = {
  createMesure : (mesure, callback) => {
    mesureDao.createMesure(mesure, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateMesure : (mesure, callback) => {
    mesureDao.updateMesure(mesure, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllMesure : (id,callback) => {
    mesureDao.getAllMesure(id, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

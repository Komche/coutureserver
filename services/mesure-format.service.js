const mesureFormatDao = require("../data-access/mesure-format.dao");


module.exports = {
  createMesureFormat : (mesure_format, callback) => {
    mesureFormatDao.createMesureFormat(mesure_format, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateMesureFormat : (mesure_format, callback) => {
    mesureFormatDao.updateMesureFormat(mesure_format, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllMesureFormat : (callback) => {
    mesureFormatDao.getAllMesureFormat((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

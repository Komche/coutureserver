const employeDao = require("../data-access/employe.dao");


module.exports = {
  createEmploye : (employe, callback) => {
    employeDao.createEmploye(employe, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateEmploye : (employe, callback) => {
    employeDao.updateEmploye(employe, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllEmploye : (callback) => {
    employeDao.getAllEmploye((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

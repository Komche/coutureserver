const tissusDao = require("../data-access/tissus.dao");


module.exports = {
  createTissus : (tissus, callback) => {
    tissusDao.createTissus(tissus, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateTissus : (tissus, callback) => {
    tissusDao.updateTissus(tissus, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllTissus : (callback) => {
    tissusDao.getAllTissus((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

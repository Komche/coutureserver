const clientDao = require("../data-access/client.dao");


module.exports = {
  createClient : (client, callback) => {
    clientDao.createClient(client, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  updateClient : (client, callback) => {
    clientDao.updateClient(client, (error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  },
  getAllClient : (callback) => {
    clientDao.getAllClient((error, result) => {
      if (error) {
        return callback(error);
      }
      
      return callback(null, result);
    });
  }
};

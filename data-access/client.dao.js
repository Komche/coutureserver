const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createClient: (client, callback) => {
    pool.query(
      insertDataSQL(client, "client"),
      Object.values(client),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateClient: (client, callback) => {
    pool.query(
      updateDataSQL(client, "client"),
      Object.values(client),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllClient: (callback) => {
    pool.query(
      getAllDataSQL("client"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

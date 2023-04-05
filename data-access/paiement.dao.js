const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createPaiement: (paiement, callback) => {
    pool.query(
      insertDataSQL(paiement, "paiement"),
      Object.values(paiement),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updatePaiement: (paiement, callback) => {
    pool.query(
      updateDataSQL(paiement, "paiement"),
      Object.values(paiement),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllPaiement: (callback) => {
    pool.query(
      getAllDataSQL("paiement"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

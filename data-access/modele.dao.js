const pool = require("../database");
const {
  insertDataSQL,
  updateDataSQL,
  getAllDataSQL,
} = require("../services/utils");

module.exports = {
  createModele: (modele, callback) => {
    pool.query(
      insertDataSQL(modele, "modele"),
      Object.values(modele),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateModele: (modele, callback) => {
    pool.query(
      updateDataSQL(modele, "modele"),
      Object.values(modele),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllModele: (callback) => {
    pool.query(
      getAllDataSQL("modele"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

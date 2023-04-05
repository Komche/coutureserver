const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createMesureFormat: (mesure_format, callback) => {
    pool.query(
      insertDataSQL(mesure_format, "mesure_format"),
      Object.values(mesure_format),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateMesureFormat: (mesure_format, callback) => {
    pool.query(
      updateDataSQL(mesure_format, "mesure_format"),
      Object.values(mesure_format),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllMesureFormat: (callback) => {
    pool.query(
      getAllDataSQL("mesure_format"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

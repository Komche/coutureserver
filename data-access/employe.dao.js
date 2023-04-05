const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createEmploye: (employe, callback) => {
    pool.query(
      insertDataSQL(employe, "employe"),
      Object.values(employe),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateEmploye: (employe, callback) => {
    pool.query(
      updateDataSQL(employe, "employe"),
      Object.values(employe),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllEmploye: (callback) => {
    pool.query(
      getAllDataSQL("employe"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

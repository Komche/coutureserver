const pool = require("../database");
const {
  insertDataSQL,
  updateDataSQL,
  getAllDataSQL,
} = require("../services/utils");

module.exports = {
  createTissus: (tissus, callback) => {
    pool.query(
      insertDataSQL(tissus, "tissus"),
      Object.values(tissus),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateTissus: (tissus, callback) => {
    pool.query(
      updateDataSQL(tissus, "tissus"),
      Object.values(tissus),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllTissus: ( callback) => {
    pool.query(
      getAllDataSQL("tissus"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

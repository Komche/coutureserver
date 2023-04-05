const pool = require("../database");
const {
  insertDataSQL,
  updateDataSQL,
  getAllDataSQL,
} = require("../services/utils");

module.exports = {
  createMesure: (mesure, callback) => {
    pool.query(
      insertDataSQL(mesure, "mesure"),
      Object.values(mesure),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateMesure: (mesure, callback) => {
    pool.query(
      updateDataSQL(mesure, "mesure"),
      Object.values(mesure),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllMesure: (id, callback) => {
    pool.query(
      getAllDataSQL("mesure as m", ",m.date_creation AS date") +
        " ,client AS c WHERE m.id_client=c.id_client AND m.id_client =?",
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

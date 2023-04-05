const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createTache: (tache, callback) => {
    pool.query(
      insertDataSQL(tache, "tache"),
      Object.values(tache),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateTache: (tache, callback) => {
    pool.query(
      updateDataSQL(tache, "tache"),
      Object.values(tache),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllTache: (callback) => {
    pool.query(
      getAllDataSQL(`tache AS t, commande AS c 
      WHERE c.id_commande=t.id_commande`),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

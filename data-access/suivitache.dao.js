const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createSuivitache: (suivitache, callback) => {
    pool.query(
      insertDataSQL(suivitache, "suivi_tache"),
      Object.values(suivitache),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateSuivitache: (suivitache, callback) => {
    pool.query(
      updateDataSQL(suivitache, "suivi_tache"),
      Object.values(suivitache),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllSuivitache: (callback) => {
    pool.query(
      getAllDataSQL(`tache AS t, suivi_tache AS s, employe  AS e, commande AS c 
      WHERE t.id_tache=s.id_tache AND e.id_employe=s.id_employe AND c.id_commande=t.id_commande`),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};

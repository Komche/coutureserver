const pool = require("../database");
const { insertDataSQL, updateDataSQL, getAllDataSQL } = require("../services/utils");

module.exports = {
  createCommande: (commande, callback) => {
    pool.query(
      insertDataSQL(commande, "commande"),
      Object.values(commande),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateCommande: (commande, callback) => {
    pool.query(
      updateDataSQL(commande, "commande"),
      Object.values(commande),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  validateCommande: (commande, callback) => {
    pool.query("UPDATE commande SET etat = ? WHERE id_commande = ?",
      Object.values(commande),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAllCommande: (callback) => {
    pool.query(
      getAllDataSQL(`commande AS c, tissus AS t, modele AS m, client AS cl
      WHERE c.id_tissus=t.id_tissus AND c.id_modele= m.id_modele AND c.id_client=cl.id_client`, ",c.date_creation"),
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  countCommade: (callback) => {
    pool.query(
      "SELECT CONCAT('ED-00', COUNT(*)+1) AS num  FROM commande",
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      });
  },
};

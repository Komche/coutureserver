const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config();

// création d'un pool de connection
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// exporter la connection
module.exports = pool;

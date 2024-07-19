const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db"); // Adjust path if necessary

module.exports = db;

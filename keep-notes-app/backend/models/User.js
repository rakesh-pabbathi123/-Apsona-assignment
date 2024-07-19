const sqlite3 = require("sqlite3").verbose();
const db = require("../db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
});

module.exports = {
  create: (username, password, callback) => {
    const stmt = db.prepare(
      "INSERT INTO users (username, password) VALUES (?, ?)"
    );
    stmt.run(username, password, callback);
    stmt.finalize();
  },
  findByUsername: (username, callback) => {
    db.get("SELECT * FROM users WHERE username = ?", [username], callback);
  },
};

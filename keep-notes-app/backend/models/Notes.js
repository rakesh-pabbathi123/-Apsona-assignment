const sqlite3 = require("sqlite3").verbose();
const db = require("../db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      tags TEXT,
      backgroundColor TEXT,
      isArchived BOOLEAN,
      isTrashed BOOLEAN,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = {
  create: (title, content, tags, backgroundColor, callback) => {
    const stmt = db.prepare(
      "INSERT INTO notes (title, content, tags, backgroundColor, isArchived, isTrashed) VALUES (?, ?, ?, ?, ?, ?)"
    );
    stmt.run(title, content, tags, backgroundColor, false, false, callback);
    stmt.finalize();
  },
  getAll: (callback) => {
    db.all("SELECT * FROM notes", [], callback);
  },
};

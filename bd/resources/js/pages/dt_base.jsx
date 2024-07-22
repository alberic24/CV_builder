const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('users.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT, age INTEGER)");
});

db.close();

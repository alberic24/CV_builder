const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;


const db = new sqlite3.Database('users.db');
db.run('CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT, email TEXT, age TEXT)');

app.use(express.json());

app.post('/addUser', (req, res) => {
    const { username, password, email, age } = req.body;
    db.run('INSERT INTO users (username, password, email, age) VALUES (?, ?, ?, ?)', [username, password, email, age], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
        } else {
            res.json({ message: 'Utilisateur ajouté avec succès' });
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

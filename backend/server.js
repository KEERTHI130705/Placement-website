const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('credentials.db'); // Make sure this file exists

app.use(cors());
app.use(express.json({ limit: '10mb' }));



  
// Route to validate username and password
app.post('/validatePassword', (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt:', username, password); // Logging username and password for debugging

    try {
        // Query the `students` table, not `credentials`
        const stmt = db.prepare('SELECT * FROM students WHERE username = ? AND password = ?');
        const row = stmt.get(username, password);

        if (row) {
            console.log('Login success');
            res.send({ validation: true });
        } else {
            console.log('Login failed');
            res.send({ validation: false });
        }
    } catch (error) {
        console.error('Database error:', error.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.post('/validateRecruiterPassword', (req, res) => {
    const { username, password } = req.body;

    console.log('Recruiter Login attempt:', username, password); // Debugging log

    try {
        // Query the recruiters table for matching credentials
        const stmt = db.prepare('SELECT * FROM recruiters WHERE username = ? AND password = ?');
        const row = stmt.get(username, password);

        if (row) {
            console.log('Recruiter Login success');
            res.send({ validation: true });
        } else {
            console.log('Recruiter Login failed');
            res.send({ validation: false });
        }
    } catch (error) {
        console.error('Database error:', error.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});



  

// Start server
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

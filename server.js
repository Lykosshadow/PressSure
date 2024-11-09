const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

//function for password hashing
const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
};

//Create a new user
app.post('/users', async (req, res) => {
    const { Email, Name, DOB, Password } = req.body;
    const hashedPassword = hashPassword(Password);
    
    try {
        const [result] = await db.query(
            'INSERT INTO user (Email, Name, DOB, Password) VALUES (?, ?, ?, ?)',
            [Email, Name, DOB, hashedPassword]
        );
        res.status(201).json({ uid: result.insertId, message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});

//login API endpoint
app.post('/login', async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const [user] = await db.query('SELECT * FROM user WHERE Email = ?', [Email]);

        if (user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const hashedPassword = hashPassword(Password);

        if (user[0].Password !== hashedPassword) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        res.json({ 
            uid: user[0].uid, 
            Email: user[0].Email, 
            Name: user[0].Name, 
            DOB: user[0].DOB, 
            message: 'Login successful' 
        });
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});


//get user by ID
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const [rows] = await db.query('SELECT Email, Name, DOB FROM user WHERE uid = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});

//update user by ID
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { Email, Name, DOB, Password } = req.body;
    const hashedPassword = Password ? hashPassword(Password) : null;

    try {
        const [result] = await db.query(
            'UPDATE user SET Email = COALESCE(?, Email), Name = COALESCE(?, Name), DOB = COALESCE(?, DOB), Password = COALESCE(?, Password) WHERE uid = ?',
            [Email, Name, DOB, hashedPassword, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});

//delete user with ID and password
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { Password } = req.body;

    if (!Password) {
        return res.status(400).json({ error: 'Password is required to delete account' });
    }

    const hashedPassword = hashPassword(Password);

    try {
        const [user] = await db.query('SELECT Password FROM user WHERE uid = ?', [id]);
        
        if (user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user[0].Password !== hashedPassword) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        const [result] = await db.query('DELETE FROM user WHERE uid = ?', [id]);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});


//Add a new reading for a user
app.post('/readings', async (req, res) => {
    const { uid, Date, Time, PressureReading, Location } = req.body;
    
    try {
        const [result] = await db.query(
            'INSERT INTO readings (uid, Date, Time, PressureReading, Location) VALUES (?, ?, ?, ?, ?)',
            [uid, Date, Time, PressureReading, Location]
        );
        res.status(201).json({ message: 'Reading added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});

//Get all readings for a user
app.get('/readings/:uid', async (req, res) => {
    const { uid } = req.params;

    try {
        const [rows] = await db.query('SELECT * FROM readings WHERE uid = ?', [uid]);
        if (rows.length === 0) return res.status(404).json({ error: 'No readings found for this user' });
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
});

//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.post('/API/save', (req, res) => {
    const { userId, semesters } = req.body;
    // In production, save to a database
    res.json({ success: true });
});

app.get('/API/load', (req, res) => {
    const { userId } = req.query;
    // In production, load from database
    res.json({ success: true, semesters: [] });
});

// Handle SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
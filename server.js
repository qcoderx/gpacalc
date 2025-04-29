const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'data.json');

// Initialize server
app.use(cors());
app.use(bodyParser.json());

// Create data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ users: {} }, null, 2));
}

// Helper functions
function readData() {
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Save user data
app.post('/api/save', (req, res) => {
    const { userId, semesters } = req.body;
    const data = readData();
    
    data.users[userId] = semesters;
    writeData(data);
    
    res.json({ success: true });
});

// Load user data
app.get('/api/load/:userId', (req, res) => {
    const { userId } = req.params;
    const data = readData();
    
    if (data.users[userId]) {
        res.json({ success: true, semesters: data.users[userId] });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
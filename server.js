const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(require('./routes/homeRoutes'));

// get driver connection
const dbo = require('./db/conn');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join('client', 'build')));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start up server
app.listen(port, () => {
    // Perform a database connection when the server starts
    dbo.connectToServer((err) => {
        if (err) console.log(err);
    });
});
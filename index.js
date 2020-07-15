const express = require('express');
const path = require('path');
var cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

app.get('/plans', (req, res) => {
    res.sendFile(path.join(__dirname, 'ui', 'path.html'));
})

app.listen(process.env.PORT || 5000, console.log("Server started to listen on port " + process.env.PORT))
const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const axios = require('axios');
const CircularJSON = require('circular-json');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const publicDir = Path.resolve(__dirname, '../../public');
const port = process.env.PORT || 5000;

app.use(express.static(publicDir));

app.get('/api/bars', (req, res) => {
    axios
        .get('http://pb-api.herokuapp.com/bars')
        .then(response => {
            res.send(CircularJSON.stringify(response.data));
        })
        .catch(err => {
            console.log(err);
            res.send(CircularJSON.stringify(err));
        });
});

app.get('*', (req, res) => {
    res.sendFile(Path.resolve(publicDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`\n # server listening on http://localhost:${port}\n`);
});

const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');

const app = express();

const publicDir = Path.resolve(__dirname, '../../public');
const port = process.env.PORT || 5000;

app.use(express.static(publicDir));

app.get('*', (req, res) => {
    res.sendFile(Path.resolve(publicDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`\n # server listening on http://localhost:${port}\n`);
});

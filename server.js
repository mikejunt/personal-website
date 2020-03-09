require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const logger = require ('./server/middleware/logger');
const auth = require ('./server/routes/auth.routes');

app.use(logger)
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist/personal-website/'));
app.use('/api/auth/', auth)
app.get('*', (req, res) => res.sendFile('/dist/personal-website/index.html',{root: __dirname + '/'}));
app.listen(port, () => console.log(`Server active on localhost:${port}`))
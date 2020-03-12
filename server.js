require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mongooseConf = require('./server/config/mongo.conf')
const logger = require ('./server/middleware/logger');
const auth = require ('./server/routes/auth.routes');
const projects = require('./server/routes/project.routes');

app.use(logger)
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist/personal-website/'));
app.use('/api/auth/', auth)
app.use('/api/projects/', projects)
app.get('*', (req, res) => res.sendFile('/dist/personal-website/index.html',{root: __dirname + '/'}));
app.listen(port, () => console.log(`Server active on localhost:${port}`))
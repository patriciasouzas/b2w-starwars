const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const planetaRouter = require('./routes/planetaRouter');
const index = require('../app/routes/index');

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.ikn8i.mongodb.net/<dbname>", { useUnifiedTopology: true, useNewUrlParser: true});

let db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('A conexão com o banco de dados foi feita com sucesso.')
});

app.use(bodyParse.json());
app.use("/", index);
app.use('/planetas', planetaRouter);

module.exports = app;

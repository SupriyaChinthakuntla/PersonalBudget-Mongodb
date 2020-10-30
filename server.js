const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');
const pbModel = require('./models/budgetModel');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('', express.static('public'));
app.use(cors());

app.get('/test', (req, res) => {
    res.send('Helloo!');
});

mongoose.connect('mongodb://127.0.0.1:27017/budget-db',{
    useNewUrlParser:true,
    useCreateIndex : true
});

const data= require('./budget.json');

app.get('/budget', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
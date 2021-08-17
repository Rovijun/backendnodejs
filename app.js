const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Header = require("./models/Header");
const Formation = require("./models/Formation");
const app = express();

mongoose
    .connect(
        'mongodb+srv://rovijun:Rovijun21@clusterme.ne5g0.mongodb.net/nodejs?retryWrites=true&w=majority',
        { useNewUrlParser: true, userUnifiedTopology: true }
    )
    .then(()=> console.log("connexion à MongoDB réussie !"))
    .catch(()=> console.log("connexion à MongoDB échouée !"));  

app.use(cors());
app.use(express.json());

app.get('/api/header', (req, res, next) => {
    Header.find().then(headers => res.status(200).json(headers));
});

app.get('/api/formation', (req, res, next) => {
    Formation.find().then(formations => res.status(200).json(formations));
});

app.post('/api/formation', (req, res, next) => {
    const formation = new Formation({...req.body});
    formation.save().then(() => res.status(201).json({ message: `Formation crée !`})).catch(error=>res.status(400).json({error}));
});

module.exports = app;
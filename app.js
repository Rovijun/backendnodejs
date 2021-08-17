const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Header = require("./models/Header");
const Formation = require("./models/Formation");
require("dotenv").config();
const app = express();

mongoose
    .connect(
        `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@clusterme.ne5g0.mongodb.net/${process.env.NODE_DBNAME_MONGOOSE}?retryWrites=true&w=majority`,
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
    const formation = new Formation({ ...req.body });
    formation.save().then(() => res.status(201).json({ message: `Formation crée !`})).catch((error) => res.status(400).json({ error }));
});

app.delete('/api/formation/:id', (req, res, next) => {
    Formation.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: `Formation supprimée !`}))
        .catch((error) => res.status(400).json({ error }));
});

app.put('/api/formation/:id', (req, res, next) => {
    Formation.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: `Formation modifiée !`}))
        .catch((error) => res.status(400).json({ error }));
});

module.exports = app;
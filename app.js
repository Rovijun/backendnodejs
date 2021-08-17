const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Header = require("./models/Header");
const formationRoutes = require("./routes/formation");
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

app.use("/api/formation", formationRoutes);

module.exports = app;
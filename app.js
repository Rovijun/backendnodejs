const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formationRoutes = require("./routes/formation");
const headerRoutes = require("./routes/header");
require("dotenv").config();
const app = express();

mongoose
    .connect(
        `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@clusterme.ne5g0.mongodb.net/${process.env.NODE_DBNAME_MONGOOSE}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=> console.log("connexion à MongoDB réussie !"))
    .catch(()=> console.log("connexion à MongoDB échouée !"));  

app.use(cors());
app.use(express.json());

app.use('/api/header', headerRoutes);

app.use("/api/formation", formationRoutes);

module.exports = app;
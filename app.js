const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formationRoutes = require("./routes/formation");
const headerRoutes = require("./routes/header");
const devexperienceRoutes = require("./routes/devexp");
const noexperienceRoutes = require("./routes/nodevexp");
const hardRoutes = require("./routes/hard");
const softRoutes = require("./routes/soft");
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

app.use("/api/experience/devexp", devexperienceRoutes);

app.use("/api/experience/nodevexp", noexperienceRoutes);

app.use("/api/competences/hard", hardRoutes);

app.use("/api/competences/soft", softRoutes);

module.exports = app;
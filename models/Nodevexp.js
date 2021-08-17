const mongoose = require("mongoose");
const nodevexpSchema = mongoose.Schema({
    date: { type: String, required: true }, 
    realization: { type: String, required: true }, 
    theme: { type: String, required: true }, 
    description: { type: String, required: true }, 
    job: { type: String, required: true }, 
});
module.exports = mongoose.model("Nodevexp", nodevexpSchema);
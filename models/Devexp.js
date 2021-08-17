const mongoose = require("mongoose");
const devexpSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    date: { type: String, required: true }, 
    type: { type: String, required: true }, 
    stack: { type: String, required: true }, 
    description: { type: String, required: true }, 
});
module.exports = mongoose.model("Devexp", devexpSchema);
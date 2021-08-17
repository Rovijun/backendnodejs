const mongoose = require("mongoose");
const hardSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String, required: true }, 
});
module.exports = mongoose.model("Hard", hardSchema);
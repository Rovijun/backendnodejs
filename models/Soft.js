const mongoose = require("mongoose");
const softSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String, required: true }, 
});
module.exports = mongoose.model("Soft", softSchema);
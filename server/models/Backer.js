const mongoose = require("mongoose");


const backerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true },
  interest: { type: String, required: true },
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Startup",
    required: false   // ← now it’s optional
  }
}, { timestamps: true });

module.exports = mongoose.model("Backer", backerSchema);



const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    projectTitle: String,
    description: String,
    fundingGoal: String,
    companyName: String,
    companyAge: String,
    companyType: String,
    annualTurnover: String,
    registrationFile: String,
    pitchdeckFile: String,
    businessPlanFile: String,
    financialModelFile: String,
    foundersProfileFile: String,
    contingencyPlanFile: String,
    innovation: String,
    wantsCertificate: Boolean,
    wantsNotification: Boolean,
    status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Approved", "Rejected"],
  },

    // ✅ New fields for admin management
    approved: {
      type: Boolean,
      default: false,
    },
    rejected: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Startup", startupSchema);


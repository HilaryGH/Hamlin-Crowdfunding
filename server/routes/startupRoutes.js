const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Startup = require("../models/Startup");
const multer = require("multer");
const uploadEdit = multer(); // memory storage for editing form data \

router.post(
  "/",
  upload.fields([
    { name: "registrationFile" },
    { name: "pitchdeckFile" },
    { name: "businessPlanFile" },
    { name: "financialModelFile" },
    { name: "foundersProfileFile" },
    { name: "contingencyPlanFile" },
  ]),
  async (req, res) => {
    try {
      const files = req.files;

      if (
        !files.registrationFile ||
        !files.pitchdeckFile ||
        !files.businessPlanFile ||
        !files.financialModelFile ||
        !files.foundersProfileFile ||
        !files.contingencyPlanFile
      ) {
        return res.status(400).json({ error: "All files must be uploaded." });
      }

      const startup = new Startup({
        ...req.body,
        wantsCertificate: req.body.wantsCertificate === "true",
        wantsNotification: req.body.wantsNotification === "true",
        registrationFile: files.registrationFile[0].filename,
        pitchdeckFile: files.pitchdeckFile[0].filename,
        businessPlanFile: files.businessPlanFile[0].filename,
        financialModelFile: files.financialModelFile[0].filename,
        foundersProfileFile: files.foundersProfileFile[0].filename,
        contingencyPlanFile: files.contingencyPlanFile[0].filename,
      });

      await startup.save();
      res.status(201).json({ message: "Startup created successfully", startup });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;

    const query = search
      ? { projectTitle: { $regex: search, $options: "i" } }
      : {};

    const startups = await Startup.find(query).sort({ createdAt: -1 });

    res.json(startups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch startups" });
  }
});
// Get startup by email (for dashboard)
router.get("/:email", async (req, res) => {
  try {
    const startup = await Startup.findOne({ email: req.params.email });
    if (!startup) return res.status(404).json({ message: "Not found" });
    res.json(startup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", uploadEdit.none(), async (req, res) => {
  try {
    const updated = await Startup.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        wantsCertificate: req.body.wantsCertificate === "true",
        wantsNotification: req.body.wantsNotification === "true",
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Startup not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Startup.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

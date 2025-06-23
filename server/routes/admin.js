// routes/admin.js
const express = require("express");
const Startup = require("../models/Startup");
const { verifyToken, isAdmin } = require("../middleware/auth");

const Backer = require("../models/Backer");

const router = express.Router();

router.get("/startups", verifyToken, isAdmin, async (req, res) => {
  try {
    const startups = await Startup.find().sort({ createdAt: -1 });
    res.json(startups);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
// GET: Fetch all backers (admin only)
router.get("/backers", verifyToken, isAdmin, async (req, res) => {
  try {
    const backers = await Backer.find().sort({ createdAt: -1 });
    res.status(200).json(backers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while fetching backers." });
  }
});
// Approve a startup
router.patch("/startups/:id/approve", async (req, res) => {
  try {
    const updated = await Startup.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Approval failed." });
  }
});

// Approve a startup
router.patch("/startups/:id/approve", async (req, res) => {
  try {
    const updated = await Startup.findByIdAndUpdate(
      req.params.id,
      { approved: true, rejected: false },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Approval failed." });
  }
});

// Reject a startup
router.patch("/startups/:id/reject", async (req, res) => {
  try {
    const updated = await Startup.findByIdAndUpdate(
      req.params.id,
      { rejected: true, approved: false },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Rejection failed." });
  }
});

// Delete a startup
router.delete("/startups/:id", async (req, res) => {
  try {
    await Startup.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed." });
  }
});
// routes/admin.js
router.get("/backers", async (req, res) => {
  try {
    const backers = await Backer.find().populate("projectId", "projectTitle");
    res.json(backers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch backers" });
  }
});

module.exports = router;

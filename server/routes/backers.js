const express = require("express");
const router  = express.Router();
const Backer  = require("../models/Backer");
const Startup = require("../models/Startup");

// POST: Create a new backer (interest)
router.post("/", async (req, res) => {
  try {
    const { fullName, email, interest, projectId } = req.body;

    if (projectId) {
      const project = await Startup.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
    }

    const backer = new Backer({ fullName, email, interest, projectId });
    await backer.save();
    res.status(201).json({ message: "Interest submitted", backer });
  } catch (error) {
    console.error("Error in POST /api/backers:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/backers[?email=foo@bar.com]
router.get("/", async (req, res) => {
  try {
    const { email } = req.query;
    let list;
    if (email) {
      list = await Backer.find({ email })
        .sort({ createdAt: -1 })
        .populate("projectId", "projectTitle");
    } else {
      list = await Backer.find()
        .sort({ createdAt: -1 })
        .populate("projectId", "projectTitle");
    }
    return res.json(list);
  } catch (err) {
    console.error("Failed to fetch backers", err);
    res.status(500).json({ error: "Failed to fetch backers" });
  }
});

// PATCH: Update a backer
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Backer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// DELETE: Withdraw interest
router.delete("/:id", async (req, res) => {
  try {
    await Backer.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;



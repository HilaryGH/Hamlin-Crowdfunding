const express = require("express");
const Startup = require("../models/Startup");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";

    const projects = await Startup.find({
      $or: [
        { projectTitle: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to load projects." });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const project = await Startup.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to load project" });
  }
});

module.exports = router;


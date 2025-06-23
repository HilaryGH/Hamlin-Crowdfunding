const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/messages
router.post("/", async (req, res) => {
  try {
    const { name, email, content } = req.body;
    const message = new Message({ name, email, content });
    await message.save();
    res.status(201).json({ message: "Submitted successfully" });
  } catch (err) {
    console.error("Message submit error:", err);
    res.status(500).json({ error: "Submission failed" });
  }
});

// GET /api/messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;

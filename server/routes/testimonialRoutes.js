const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const upload = require('../middleware/upload'); // reuse existing multer setup

// POST with image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, quote } = req.body;
    const image = req.file ? req.file.filename : null;

    const newTestimonial = new Testimonial({ name, quote, image });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add testimonial', error });
  }
});


// GET - get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonials', error });
  }
});

module.exports = router;

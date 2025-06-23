const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");


const app = express();
app.use(cors());              // ✅ Allow cross-origin requests
app.use(express.json());      // ✅ Parse JSON from requests


const authRoutes = require("./routes/auth");
const startupRoutes = require("./routes/startupRoutes"); // <-- updated this line
const backerRoutes = require("./routes/backers"); 
const testimonialRoutes = require('./routes/testimonialRoutes'); 
app.use('/api/testimonials', testimonialRoutes);      // <-- assuming this file exists

const messageRoutes = require("./routes/messageRoutes");
app.use("/api/messages", messageRoutes);
const adminRoutes = require("./routes/admin"); 
const projectRoutes = require("./routes/projects");
app.use("/api/projects", projectRoutes);




app.use(cors());
app.use(express.json());


// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/backers", backerRoutes);
app.use("/api/admin", adminRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




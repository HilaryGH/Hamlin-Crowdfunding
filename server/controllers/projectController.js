const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const { title, description, goal } = req.body;
    const image = req.file?.path;

    const project = new Project({ title, description, goal, image });
    await project.save();

    res.status(201).json({ message: 'Project submitted for review', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPendingProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isApproved: false });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.approveProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, { isApproved: true }, { new: true });
    res.status(200).json({ message: 'Project approved', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApprovedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isApproved: true });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
  createProject,
  getPendingProjects,
  approveProject,
  getApprovedProjects,
} = require('../controllers/projectController');

router.post('/', upload.single('image'), createProject);
router.get('/pending', getPendingProjects); // admin view
router.patch('/approve/:id', approveProject); // admin approve
router.get('/approved', getApprovedProjects); // for investors

module.exports = router;

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  title: string;
  description: string;
}

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/pending")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  const approveProject = async (id: string) => {
    try {
      await axios.patch(`http://localhost:5000/api/projects/approve/${id}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Admin - Pending Projects</h2>
      {projects.map((project) => (
        <div key={project._id} className="mb-4 border p-2">
          <h3 className="font-semibold">{project.title}</h3>
          <p>{project.description}</p>
          <button
            onClick={() => approveProject(project._id)}
            className="bg-green-600 text-white px-3 py-1 mt-2"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;

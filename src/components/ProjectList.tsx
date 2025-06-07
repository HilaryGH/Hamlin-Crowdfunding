import React, { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  title: string;
  description: string;
  goalAmount: number;
  images: string[];
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/approved")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Live Projects</h2>
      {projects.map((project) => (
        <div key={project._id} className="mb-4 border p-2">
          <h3 className="font-semibold">{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Goal:</strong> ${project.goalAmount}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={`http://localhost:5000/${img}`}
                alt="Project"
                className="w-24 h-24 object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

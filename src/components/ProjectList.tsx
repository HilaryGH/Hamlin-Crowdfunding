import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  _id: string;
  name: string; // company or founder name
  projectTitle: string;
  description: string;
  fundingGoal: string;
  createdAt: string;
  logoUrl?: string; // optional logo URL
};

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (e) {
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const prev = () => setIndex((i) => Math.max(i - itemsPerPage, 0));
  const next = () =>
    setIndex((i) => Math.min(i + itemsPerPage, projects.length - itemsPerPage));

  const visible = projects.slice(index, index + itemsPerPage);

  if (loading) return <p className="text-center py-12">Loading…</p>;
  if (error) return <p className="text-center py-12 text-red-600">{error}</p>;
  if (!projects.length)
    return (
      <p className="text-center py-12 text-gray-500">No projects found.</p>
    );

  return (
    <div className="max-w-6xl bg-green-50 mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-700">Projects</h1>
        <p className="text-gray-600">Total: {projects.length}</p>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 disabled:opacity-50 transition"
        >
          <ChevronLeft size={20} className="text-green-700" />
        </button>
        <button
          onClick={next}
          disabled={index + itemsPerPage >= projects.length}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 disabled:opacity-50 transition"
        >
          <ChevronRight size={20} className="text-green-700" />
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((proj) => (
          <div
            key={proj._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              {proj.logoUrl ? (
                <img
                  src={proj.logoUrl}
                  alt={proj.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-green-200"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-2xl font-bold">
                  {proj.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Title & Info */}
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {proj.projectTitle}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              by <span className="font-medium">{proj.name}</span>
            </p>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-4 flex-grow leading-relaxed">
              {proj.description.length > 120
                ? proj.description.slice(0, 120) + "…"
                : proj.description}
            </p>

            {/* Footer */}
            <div className="mt-auto space-y-2">
              <p className="text-green-700 font-medium">
                Goal: ${proj.fundingGoal}
              </p>
              <p className="text-xs text-gray-400">
                Submitted:{" "}
                {new Date(proj.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>

              <Link to={`/projects/${proj._id}`}>
                <button className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">
                  Show More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

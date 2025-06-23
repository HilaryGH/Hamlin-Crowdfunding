import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

type Project = {
  _id: string;
  name: string;
  email?: string;
  projectTitle: string;
  description: string;
  fundingGoal: string;
  companyName?: string;
  companyAge?: string;
  companyType?: string;
  annualTurnover?: string;
  innovation?: string;
  wantsCertificate?: boolean;
  wantsNotification?: boolean;
  createdAt: string;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Interest form states
  const [showInterest, setShowInterest] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch {
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/backers", {
        fullName,
        email,
        interest,
        projectId: project?._id,
      });
      alert("Thank you for your interest!");
      setShowInterest(false);
    } catch {
      alert("Submission failed. Please try again later.");
    }
  };

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-600">{error}</p>;
  if (!project) return <p className="p-6 text-center">Project not found.</p>;

  return (
    <>
      {/* Project Header */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <Link
          to="/"
          className="inline-block text-blue-600 hover:underline mb-4"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          {project.projectTitle}
        </h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Key Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Detail label="Founder Name" value={project.name} />
            <Detail label="Funding Goal" value={`$${project.fundingGoal}`} />
            <Detail
              label="Submitted"
              value={new Date(project.createdAt).toLocaleDateString()}
            />
            <Detail label="Innovation" value={project.innovation || "N/A"} />
          </div>
          <div className="space-y-2">
            <Detail label="Company Name" value={project.companyName || "N/A"} />
            <Detail label="Company Age" value={project.companyAge || "N/A"} />
            <Detail label="Company Type" value={project.companyType || "N/A"} />
            <Detail
              label="Annual Turnover"
              value={project.annualTurnover || "N/A"}
            />
            <Detail
              label="Certificate"
              value={project.wantsCertificate ? "Yes" : "No"}
            />
            <Detail
              label="Notification"
              value={project.wantsNotification ? "Yes" : "No"}
            />
          </div>
        </div>
      </div>

      {/* Show Interest Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowInterest(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full mb-3 hover:bg-blue-900 transition"
        >
          Show Interest
        </button>
      </div>

      {/* Interest Modal */}
      {showInterest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative"
          >
            <button
              type="button"
              onClick={() => setShowInterest(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Interested in this Project?
            </h2>
            <div className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <label className="block text-gray-700 mb-1">
                  Why are you interested?
                </label>
                <textarea
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-green-200"
                  rows={4}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
            >
              Submit Interest
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;

// Helper components for cleaner markup
const Detail: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <p>
    <span className="font-medium text-gray-800">{label}:</span>{" "}
    <span className="text-gray-600">{value}</span>
  </p>
);

const Input: React.FC<{
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, type, value, onChange }) => (
  <div>
    <label className="block text-gray-700 mb-1">{label}</label>
    <input
      required
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg p-2 focus:ring focus:ring-green-200"
    />
  </div>
);

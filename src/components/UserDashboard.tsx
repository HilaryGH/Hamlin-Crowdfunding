import React, { useState } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";
import TestimonialForm from "./TestimonialForm";
import BackerDashboard from "./BackerDashboard";

// --- Types ---
type StartupData = {
  _id: string;
  name: string;
  email: string;
  projectTitle: string;
  description: string;
  status: string;
  wantsCertificate: boolean;
  wantsNotification: boolean;
  registrationFile?: string;
  pitchdeckFile?: string;
  businessPlanFile?: string;
  financialModelFile?: string;
  foundersProfileFile?: string;
  contingencyPlanFile?: string;
};

const fileFields = [
  "registrationFile",
  "pitchdeckFile",
  "businessPlanFile",
  "financialModelFile",
  "foundersProfileFile",
  "contingencyPlanFile",
] as const;

// --- Component ---
const UserDashboard: React.FC = () => {
  const [data, setData] = useState<StartupData | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const fetchSubmission = async () => {
    try {
      const res = await axios.get<StartupData>(
        `http://localhost:5000/api/startups/${encodeURIComponent(email)}`
      );
      setData(res.data);
      setError("");
    } catch {
      setError("Submission not found.");
      setData(null);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!data) return;
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!data) return;
    const { name, checked } = e.target;
    setData({ ...data, [name]: checked });
  };

  const handleUpdate = async () => {
    if (!data) return;
    try {
      await axios.put(`http://localhost:5000/api/startups/${data._id}`, data);
      alert("Updated successfully!");
    } catch {
      alert("Update failed.");
    }
  };

  const handleDelete = async () => {
    if (!data || !window.confirm("Are you sure you want to delete?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/startups/${data._id}`);
      setData(null);
      alert("Deleted successfully.");
    } catch {
      alert("Delete failed.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Panel 1: Testimonial Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <TestimonialForm />
        </div>

        {/* Panel 2: Backer Dashboard */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <BackerDashboard />
        </div>

        {/* Panel 3: Startup Submission Lookup & Edit */}
        <div className="space-y-6">
          {/* Lookup */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-base md:text-2xl text-blue-900 font-semibold mb-4">
              Your Startup Submission
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleInputChange}
                className="flex-1 border rounded px-3 py-2 focus:ring focus:ring-green-200"
              />
              <button
                onClick={fetchSubmission}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Load
              </button>
            </div>
            {error && <p className="text-red-600 mt-3">{error}</p>}
          </div>

          {/* Display & Edit */}
          {data && (
            <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Your Submission</h2>
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    data.status === "Approved"
                      ? "bg-green-500"
                      : data.status === "Rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {data.status}
                </span>
              </div>

              {/* File Links */}
              <div className="space-y-2">
                {fileFields.map(
                  (field) =>
                    data[field] && (
                      <p key={field} className="text-gray-700">
                        <strong className="capitalize">
                          {field.replace(/([A-Z])/g, " $1")}:
                        </strong>{" "}
                        <a
                          href={`http://localhost:5000/uploads/${data[field]!}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </p>
                    )
                )}
              </div>

              {/* Editable Fields */}
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input
                    name="name"
                    value={data.name}
                    onChange={handleFieldChange}
                    className="w-full border rounded px-3 py-2 focus:ring focus:ring-green-200"
                  />
                </div>

                {/* Project Title */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Project Title
                  </label>
                  <input
                    name="projectTitle"
                    value={data.projectTitle}
                    onChange={handleFieldChange}
                    className="w-full border rounded px-3 py-2 focus:ring focus:ring-green-200"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={data.description}
                    onChange={handleFieldChange}
                    rows={4}
                    className="w-full border rounded px-3 py-2 focus:ring focus:ring-green-200"
                  />
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="wantsCertificate"
                      checked={data.wantsCertificate}
                      onChange={handleCheckboxChange}
                    />
                    I want a certificate
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="wantsNotification"
                      checked={data.wantsNotification}
                      onChange={handleCheckboxChange}
                    />
                    I want notifications
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t">
                <button
                  onClick={handleUpdate}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                >
                  Delete Submission
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

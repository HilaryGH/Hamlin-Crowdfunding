import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCheckCircle,
  FaTrash,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import MessageDashboard from "./MessageDashboard";

// Types
type Startup = {
  _id: string;
  name: string;
  email: string;
  projectTitle: string;
  description: string;
  fundingGoal: string;
  companyName: string;
  companyAge: string;
  companyType: string;
  annualTurnover: string;
  innovation: string;
  wantsCertificate: boolean;
  wantsNotification: boolean;
  approved?: boolean;
  createdAt: string;
  registrationFile?: string;
  pitchdeckFile?: string;
  businessPlanFile?: string;
  financialModelFile?: string;
  foundersProfileFile?: string;
  contingencyPlanFile?: string;
};

type Backer = {
  _id: string;
  fullName: string;
  email: string;
  interest: string;
  createdAt: string;
  projectId?: {
    _id: string;
    projectTitle: string;
  };
};

const AdminDashboard: React.FC = () => {
  const role = localStorage.getItem("role");
  const [startups, setStartups] = useState<Startup[]>([]);
  const [backers, setBackers] = useState<Backer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (role !== "admin") return;

      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        const [startupRes, backerRes] = await Promise.all([
          axios.get("http://localhost:5000/api/admin/startups", { headers }),
          axios.get("http://localhost:5000/api/admin/backers", { headers }),
        ]);

        setStartups(startupRes.data);
        setBackers(backerRes.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load admin data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [role]);

  const handleApprove = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:5000/api/admin/startups/${id}/approve`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setStartups((prev) =>
        prev.map((s) => (s._id === id ? { ...s, approved: true } : s))
      );
    } catch (err) {
      alert("Approval failed");
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this startup?"
    );
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/admin/startups/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStartups((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  if (role !== "admin") {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p>You must be an admin to view this page.</p>
      </div>
    );
  }

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  const fileUrl = (filename: string) =>
    `http://localhost:5000/uploads/${filename}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h1>

      {/* Startups Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Submitted Startups
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2 hidden sm:table-cell">Email</th>
                <th className="border p-2">Project</th>
                <th className="border p-2 hidden md:table-cell">Goal</th>
                <th className="border p-2">Submitted</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {startups.map((s) => (
                <React.Fragment key={s._id}>
                  <tr className="bg-white">
                    <td className="border p-2">{s.name}</td>
                    <td className="border p-2 hidden sm:table-cell">
                      {s.email}
                    </td>
                    <td className="border p-2">{s.projectTitle}</td>
                    <td className="border p-2 hidden md:table-cell">
                      {s.fundingGoal}
                    </td>
                    <td className="border p-2">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border p-2 text-center">
                      {s.approved ? (
                        <span className="text-green-600 font-semibold">
                          ✅ Approved
                        </span>
                      ) : (
                        <span className="text-yellow-600 font-semibold">
                          ⏳ Pending
                        </span>
                      )}
                    </td>
                    <td className="border p-2 flex items-center gap-2 justify-center">
                      <button
                        onClick={() => toggleExpand(s._id)}
                        title="Show Files"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        {expandedRow === s._id ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                      {!s.approved && (
                        <button
                          onClick={() => handleApprove(s._id)}
                          className="text-green-600 hover:text-green-800"
                          title="Approve"
                        >
                          <FaCheckCircle />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>

                  {/* Collapsible File Links */}
                  {expandedRow === s._id && (
                    <tr>
                      <td colSpan={7} className="border-t bg-gray-50 p-4">
                        <div className="space-y-2 text-sm">
                          <h4 className="font-semibold mb-2">
                            Uploaded Documents:
                          </h4>
                          {s.registrationFile && (
                            <a
                              href={fileUrl(s.registrationFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 underline"
                            >
                              📄 Registration File
                            </a>
                          )}
                          {s.pitchdeckFile && (
                            <a
                              href={fileUrl(s.pitchdeckFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 underline"
                            >
                              📄 Pitch Deck
                            </a>
                          )}
                          {s.businessPlanFile && (
                            <a
                              href={fileUrl(s.businessPlanFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 underline"
                            >
                              📄 Business Plan
                            </a>
                          )}
                          {s.financialModelFile && (
                            <a
                              href={fileUrl(s.financialModelFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 underline"
                            >
                              📄 Financial Model
                            </a>
                          )}
                          {s.foundersProfileFile && (
                            <a
                              href={fileUrl(s.foundersProfileFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 underline"
                            >
                              📄 Founders Profile
                            </a>
                          )}
                          {s.contingencyPlanFile && (
                            <a
                              href={fileUrl(s.contingencyPlanFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 underline"
                            >
                              📄 Contingency Plan
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Backers Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Interested Backers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Full Name</th>
                <th className="border p-2 hidden sm:table-cell">Email</th>
                <th className="border p-2">Interest</th>
                <th className="border p-2 hidden md:table-cell">Project</th>
                <th className="border p-2">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {backers.map((b) => (
                <tr key={b._id}>
                  <td className="border p-2">{b.fullName}</td>
                  <td className="border p-2 hidden sm:table-cell">{b.email}</td>
                  <td className="border p-2 capitalize">{b.interest}</td>
                  <td className="border p-2 hidden md:table-cell">
                    {b.projectId?.projectTitle || "—"}
                  </td>
                  <td className="border p-2">
                    {new Date(b.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MessageDashboard />
      </section>
    </div>
  );
};

export default AdminDashboard;

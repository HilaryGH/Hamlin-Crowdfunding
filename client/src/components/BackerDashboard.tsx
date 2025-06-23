import React, { useState } from "react";
import axios from "axios";

type Backer = {
  _id: string;
  fullName: string;
  email: string;
  interest: string;
  projectId?: { _id: string; projectTitle: string };
  createdAt: string;
  status: string;
};

const API_BASE = "https://crowdfunding-backend-ehc7.onrender.com";

const BackerDashboard: React.FC = () => {
  const [email, setEmail] = useState("");
  const [backers, setBackers] = useState<Backer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMyBackers = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await axios.get(`${API_BASE}/api/backers`, {
        params: { email },
      });
      const data = res.data;
      if (!Array.isArray(data)) {
        console.warn("Expected array, got:", data);
        setError("Unexpected response format from server.");
        setBackers([]);
      } else {
        setBackers(data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Could not load your submissions.");
      setBackers([]);
    } finally {
      setLoading(false);
    }
  };

  const updateInterest = async (id: string, newInterest: string) => {
    try {
      const res = await axios.patch(`${API_BASE}/api/backers/${id}`, {
        interest: newInterest,
      });
      setBackers((prev) => prev.map((b) => (b._id === id ? res.data : b)));
    } catch {
      alert("Update failed");
    }
  };

  const withdraw = async (id: string) => {
    if (!window.confirm("Withdraw this interest?")) return;
    try {
      await axios.delete(`${API_BASE}/api/backers/${id}`);
      setBackers((prev) => prev.filter((b) => b._id !== id));
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Lookup Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-base md:text-2xl text-blue-900  font-semibold mb-4">
          your Backer Submissions
        </h2>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:ring focus:ring-green-200"
          />
          <button
            onClick={fetchMyBackers}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Load
          </button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center">Loading…</p>}

      {/* Backer List */}
      {!loading && Array.isArray(backers) && backers.length > 0 ? (
        <div className="space-y-4">
          {backers.map((b) => (
            <div
              key={b._id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1 space-y-1">
                <p>
                  <strong>Project:</strong>{" "}
                  {b.projectId?.projectTitle || "Unknown"}
                </p>
                <p className="flex items-center gap-2">
                  <strong>Interest:</strong>
                  <select
                    value={b.interest}
                    onChange={(e) => updateInterest(b._id, e.target.value)}
                    className="border rounded px-2 py-1 focus:ring focus:ring-green-200"
                  >
                    <option value="equity">Equity</option>
                    <option value="debt">Debt</option>
                    <option value="reward">Reward</option>
                    <option value="donation">Donation</option>
                  </select>
                </p>
                <p>
                  <strong>Status:</strong> {b.status || "Pending"}
                </p>
                <p className="text-sm text-gray-500">
                  Submitted: {new Date(b.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => withdraw(b._id)}
                className="text-red-600 hover:underline"
              >
                Withdraw
              </button>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-center text-gray-500">No submissions yet.</p>
        )
      )}
    </div>
  );
};

export default BackerDashboard;

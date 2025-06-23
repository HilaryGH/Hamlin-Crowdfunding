// BackerRegistration.tsx
import React, { useState } from "react";
import axios from "axios";

type BackerFormData = {
  fullName: string;
  email: string;
  interest: string;
};

const BackerRegistration: React.FC = () => {
  const [formData, setFormData] = useState<BackerFormData>({
    fullName: "",
    email: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.interest) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await axios.post(
        "https://crowdfunding-backend-ehc7.onrender.com/api/backers",
        formData
      );
      setSubmitted(true);
      setError("");
      setFormData({ fullName: "", email: "", interest: "" });
    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {submitted && (
        <div className="text-green-600 text-sm">
          Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select Crowdfunding Interest *</option>
          <option value="equity">Equity Crowdfunding</option>
          <option value="debt">Debt Crowdfunding</option>
          <option value="reward">Reward-Based</option>
          <option value="donation">Donation-Based</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md text-sm font-medium hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BackerRegistration;

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import axios from "axios";

interface FormDataState {
  title: string;
  description: string;
  goalAmount: string;
  images: FileList | null;
}

const SubmitProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    title: "",
    description: "",
    goalAmount: "",
    images: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("goalAmount", formData.goalAmount);
    if (formData.images) {
      for (let i = 0; i < formData.images.length; i++) {
        data.append("images", formData.images[i]);
      }
    }

    try {
      await axios.post("http://localhost:5000/api/projects/submit", data);
      alert("Project submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Submit a New Project</h2>
      <input
        name="title"
        placeholder="Project Title"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <textarea
        name="description"
        placeholder="Short Description"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <input
        name="goalAmount"
        type="number"
        placeholder="Funding Goal"
        onChange={handleChange}
        required
        className="block mb-2 p-2 border"
      />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="block mb-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default SubmitProjectForm;

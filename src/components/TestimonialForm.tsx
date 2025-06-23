import React, { useState } from "react";
import axios from "axios";

const TestimonialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    quote: "",
    image: null as File | null,
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("quote", formData.quote);
    if (formData.image) data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/testimonials", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Testimonial submitted!");
      setFormData({ name: "", quote: "", image: null });
    } catch (err) {
      setError("Submission failed. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white flex flex-col gap-4"
    >
      <h2 className="text-base md:text-2xl text-blue-900  font-bold mb-4 text-center">
        Share Your Testimonial
      </h2>

      {success && <p className="text-green-600 text-center">{success}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleTextChange}
        required
        className="p-2 border border-green-300 rounded"
      />

      <textarea
        name="quote"
        placeholder="Your Testimonial"
        value={formData.quote}
        onChange={handleTextChange}
        required
        rows={4}
        className="p-2 border border-green-300 rounded"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="p-2 border border-green-300 rounded"
      />

      <button
        type="submit"
        className="bg-green-700 text-white py-2 rounded hover:bg-green-800"
      >
        Submit
      </button>
    </form>
  );
};

export default TestimonialForm;

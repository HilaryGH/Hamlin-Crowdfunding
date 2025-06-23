import React, { useState } from "react";
import axios from "axios";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/messages", formData);
      setStatus("Message submitted successfully!");
      setFormData({ name: "", email: "", content: "" });
    } catch (err) {
      setStatus("Submission failed. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-green-radial bg-cover bg-center min-h-[400px] flex items-center justify-center px-6 py-12"
        style={{ backgroundImage: "url('phone.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white text-gray-900 py-20 px-4" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Office Info & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1d6ceb] mb-3">
                Our Office
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Address:</strong> Addis Ababa, Ethiopia
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Phone:</strong> +251 911 508 734
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Email:</strong> info@hamlincapital.com
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-blue-800 mb-2">
                Follow Us
              </h4>
              <div className="flex gap-4 text-2xl text-[#1d6ceb]">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-[#1d6ceb] mb-6">
              For Enquiries
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  required
                ></textarea>
              </div>

              {status && (
                <p
                  className={`text-sm ${
                    status.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="bg-btn text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <div className="w-full h-[450px] overflow-hidden rounded-t-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9081049472766!2d38.757760499999996!3d8.9806034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855c3a2d7eaf%3A0xf78295a678e20c53!2sWolelay%20Management%20Consultancy!5e0!3m2!1sen!2set!4v1748893396165!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wolelay Management Consultancy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;

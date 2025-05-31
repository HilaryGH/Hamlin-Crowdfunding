import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Replace these URLs with your preferred images if needed
const images = [
  "https://images.unsplash.com/photo-1581091870622-2fe7f474d5d1?auto=format&fit=crop&w=800&q=80", // business team
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80", // meeting
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80", // planning
];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg mb-6">
            Hamlin Crowdfunding is a premier intermediary service facilitating
            project creators and potential backers in Ethiopia. Our mission is
            to empower local innovation and dreams through a transparent, modern
            platform.
          </p>

          <Link
            to="/discover"
            className="inline-block bg-[#1d6ceb] text-white px-6 py-3 rounded-full hover:bg-[#4c8ef0] transition duration-300"
          >
            Discover More
          </Link>
        </div>

        {/* Right: Slideshow */}
        <div className="flex-1 min-h-[300px]">
          <img
            src={images[currentImage]}
            alt="About Hamlin Crowdfunding"
            className="w-full h-full rounded-xl shadow-lg object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

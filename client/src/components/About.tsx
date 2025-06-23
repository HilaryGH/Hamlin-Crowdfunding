import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = ["about4.jpg", "about2.jpg", "about3.jpg"];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d6ceb] mb-3">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto md:mx-0 mb-6"></div>

          <p className="text-gray-600 text-base sm:text-lg  leading-relaxed mb-6">
            Hamlin Crowdfunding is a premier intermediary service facilitating
            project creators and potential backers in Ethiopia. Our mission is
            to empower local innovation and dreams through a transparent, modern
            platform.
          </p>

          <Link
            to="/about"
            className="inline-block bg-btn text-white px-6 py-3 rounded-full hover:bg-[#4c8ef0] transition duration-300"
          >
            Discover More
          </Link>
        </div>

        {/* Right: Slideshow */}
        <div className="flex-1 w-full max-w-md md:max-w-full">
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={images[currentImage]}
              alt="About Hamlin Crowdfunding"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

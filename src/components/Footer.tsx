import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footor() {
  return (
    <>
      {/* Top CTA Section */}
      <section className="bg-green-radial text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-8">
          {/* Quick Links */}
          <div className="flex flex-col gap-3 text-sm sm:text-base">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <Link to="/about" className="hover:underline hover:text-white">
              About
            </Link>
            <Link to="/register" className="hover:underline hover:text-white">
              Start a Campaign
            </Link>
            <Link
              to="/backers-investors"
              className="hover:underline hover:text-white"
            >
              Investors & Backers
            </Link>
            <Link to="/#services" className="hover:underline hover:text-white">
              Models of Crowdfunding
            </Link>
          </div>

          {/* Centered CTA */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Join the Movement
            </h2>
            <p className="mb-4 text-gray-200 max-w-md mx-auto">
              Support innovative projects and empower communities across
              Ethiopia.
            </p>
            <Link to="/projects">
              <button className="bg-[#022C22] text-white px-6 py-3 rounded-full hover:bg-[#15803D] transition">
                Discover Projects
              </button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center sm:items-end gap-3 text-xl sm:text-2xl">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/251911508734"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#022C22] text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Hamlin Crowdfunding. All rights
            reserved.
          </p>

          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footor;

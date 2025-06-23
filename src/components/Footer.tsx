import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      {/* Top CTA Section */}
      <section className="bg-green-radial text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="hover:underline">
                About
              </Link>
              <Link to="/register" className="hover:underline">
                Start a Campaign
              </Link>
              <Link to="/backers-investors" className="hover:underline">
                Investors & Backers
              </Link>
              <Link to="/user-guide" className="hover:underline">
                User Guide
              </Link>
            </nav>
          </div>

          {/* Centered CTA */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Join the Movement
            </h2>
            <p className="mb-4 text-gray-200 max-w-sm">
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
          <div className="space-y-3 text-center md:text-right">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/251911508734"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-[#022C22] text-gray-300 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Hamlin Crowdfunding. All rights
            reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;

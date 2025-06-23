import { useState } from "react";
import { X, Search, Menu } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projects?search=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center bg-white text-[#22C55E] text-sm px-12 py-2">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1">
            <MdLocationOn /> Addis Ababa, Ethiopia
          </span>
          <span className="flex items-center gap-1">
            <MdPhone /> +251 911508734
          </span>
          <span className="flex items-center gap-1">
            <MdEmail /> g.fikre2@gmail.com
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://wa.me/251911508734"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-green-radial shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-12 py-3">
          {/* Logo */}
          <div
            className="flex items-center gap-3 z-10 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="Crowd-logo.png"
              alt="Hamlin Capital"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
            <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">
              Hamlin Crowdfunding
            </span>
          </div>

          {/* Desktop Nav + Search */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <nav className="flex gap-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "#about" },
                { name: "Backers & Investors", path: "#/backers-investors" },
                { name: "Contact", path: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="relative text-lg pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find projects..."
                className="pl-8 pr-3 py-1 md:py-2 rounded-md bg-[#22C55E] text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-[#022C22] w-36 md:w-44 lg:w-56"
              />
            </form>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <Menu
              className="w-6 h-6 text-white"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <nav className="w-full max-w-xs bg-green-radial px-6 py-6 flex flex-col space-y-6 animate-slide-in-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="Crowd-logo.png"
                  alt="Hamlin Capital"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-white text-sm font-semibold">
                  Hamlin Crowdfunding
                </span>
              </div>
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-4 mt-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "#about" },
                { name: "Backers & Investors", path: "#/backers-investors" },
                { name: "Contact", path: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white text-md font-medium border-b border-white pb-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 space-y-3 text-white text-sm">
              <div className="flex items-center gap-2">
                <MdPhone className="w-5 h-5" />
                <a href="tel:+251911508734" className="hover:underline">
                  +251 911508734
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="w-5 h-5" />
                <a href="mailto:g.fikre2@gmail.com" className="hover:underline">
                  g.fikre2@gmail.com
                </a>
              </div>
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find projects..."
                  className="pl-8 pr-3 py-2 rounded-md bg-[#22C55E] text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-[#022C22] w-full"
                />
              </div>
            </form>
          </nav>

          {/* Backdrop */}
          <div
            className="flex-1 bg-black opacity-40"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;

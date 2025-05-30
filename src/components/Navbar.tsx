import { useState } from "react";
import { X, Search, Menu } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // import social icons
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"; // import info icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center bg-gray-800 text-white text-sm px-12 py-2">
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
          <a href="#" className="hover:text-blue-400">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
      {/* Navbar */}
      <header className="bg-green-radial shadow sticky top-0 z-50 transition duration-300 min-h-[64px]">
        <div className="max-w-7xl mx-auto flex justify-between items-end px-3 lg:px-12 py-2">
          {/* Left: Logo */}
          <div className="flex items-center gap-1 w-1/3 z-10">
            <img
              src="Hamlin_Crowdfunding logo.png"
              alt="HamlinCapital logo"
              className="h-[80px] w-auto object-cover"
            />
            <span className="text-white text-2xl poppins-medium ">
              Hamlin-crowdfunding
            </span>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex justify-center w-1/3 gap-10 text-white text-lg font-medium">
            {["Home", "About", " Services ", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#ffffff] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Right: search project */}
          <div className="w-1/3 flex justify-end items-center gap-2 z-10 text-white text-sm font-medium">
            {/* Desktop Search Input */}
            <div className="hidden md:flex relative ml-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Find projects..."
                className="pl-10 pr-3 py-1 rounded-lg bg-[#22C55E] text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </div>

            {/* Hamburger for small screens */}
            <div className="md:hidden relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute top-0 left-0 transition-opacity duration-200 ${
                  menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                onClick={() => setMenuOpen(true)}
              />
              <X
                className={`w-6 h-6 absolute top-0 left-0 transition-opacity duration-200 ${
                  menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          {/* Backdrop */}
          <nav className="md:hidden fixed top-0 left-0 bottom-0 w-3/4 max-w-xs z-[60] bg-green-radial px-6 py-4 flex flex-col space-y-6 animate-slide-in-left">
            {/* Top row: Logo + X button */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <img
                  src="Hamlin_Crowdfunding logo.png"
                  alt="HamlinCapital logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-white text-lg font-medium">
                  Hamlin-crowdfunding
                </span>
              </div>
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-4 mt-4">
              {["Home", "About", "Our Services ", "Projects", "Contact Us"].map(
                (text) => (
                  <a
                    key={text}
                    href={`#${text.toLowerCase()}`}
                    className="text-white text-lg font-medium border-b border-purple-400 pb-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {text}
                  </a>
                )
              )}
            </div>

            {/* Search */}
            <div className="mt-6">
              <button className="flex items-center gap-2 text-white">
                <Search className="w-5 h-5" />
                <span className="text-sm">Search</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
export default Navbar;

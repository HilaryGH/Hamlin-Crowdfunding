import { useState } from "react";
import { X, Search, Menu } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center bg-white text-[#022C22] text-sm px-12 py-2">
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
            className="hover:text-blue-400"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://wa.me/251911508734"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-green-radial shadow sticky top-0 z-50 transition duration-300 min-h-[64px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-12 py-3">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 w-1/2 z-10">
            <img
              src="Hamlin_Crowdfunding logo.png"
              alt="HamlinCapital logo"
              className="h-10 md:h-12 lg:h-16 w-auto object-contain"
            />
            <span className="text-white text-base md:text-lg lg:text-xl font-semibold">
              Hamlin-crowdfunding
            </span>
          </div>

          {/* Right: NavLinks + Search */}
          <div className="w-2/3 flex justify-end items-center gap-6 md:gap-10 z-10 text-white text-sm md:text-base font-medium">
            {/* Nav Links */}
            <nav className="hidden md:flex gap-6 lg:gap-8">
              {["About", "Backers & Investors", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className=" text-lg relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop Search Input */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder="Find projects..."
                className="pl-8 pr-3 py-1 md:py-2 rounded-md bg-[#22C55E] text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-[#022C22] w-36 md:w-44 lg:w-56"
              />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden w-6 h-6">
              <Menu
                className="w-6 h-6 text-white"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <nav className="w-3/4 max-w-xs bg-green-radial px-6 py-6 flex flex-col space-y-6 animate-slide-in-left">
            {/* Top Row */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <img
                  src="Hamlin_Crowdfunding logo.png"
                  alt="HamlinCapital logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-white text-sm font-semibold">
                  Hamlin-crowdfunding
                </span>
              </div>
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 mt-4">
              {[
                { text: "About", href: "#about" },
                { text: "Backers & Investors", href: "#/backers-investors" },
                { text: "Contact", href: "#contact" },
              ].map(({ text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="text-white text-md font-medium border-b border-white pb-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
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
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input
                  type="text"
                  placeholder="Find projects..."
                  className="pl-8 pr-3 py-2 rounded-md bg-[#22C55E] text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-[#022C22] w-full"
                />
              </div>
            </div>
          </nav>

          {/* Backdrop */}
          <div
            className="flex-1 bg-black opacity-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default Navbar;

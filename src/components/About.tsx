import { Link } from "react-router-dom";

function About() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-4">
      <div className="flex flex-col items-center  gap-6">
        {/* About Section */}
        <div className="flex flex-col items-start ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-2">
            About us
          </h1>

          {/* Horizontal underline */}
          <div className="w-45 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-4"></div>

          <p className="text-base sm:text-lg max-w-prose text-dark mb-4">
            Hamlin Crowdfunding is a premier intermediary service facilitating
            project creators and potential backers in Ethiopia.
          </p>
          <Link
            to="/discover"
            className="bg-btn text-dark px-6 py-2 rounded-full hover:bg-[#4c8ef0] transition"
          >
            Discover more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex items-start justify-start gap-6 px-50">
        {/* Vertical Line */}
        <div className="pt-6">
          <div className="w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full h-40"></div>
        </div>

        {/* About Section */}
        <div className="flex flex-col my-6 items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            About us
          </h1>
          <p className="text-lg max-w-[800px] text-dark mb-4">
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
    </>
  );
}

export default About;

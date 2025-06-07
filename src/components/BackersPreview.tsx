import { FaUsers, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackersPreview = () => {
  return (
    <section className="bg-green-50 py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1 rounded-lg bg-green-radial">
          <img
            src="Backer.png"
            alt="Our Backers"
            className="w-full h-auto object-cover overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d6ceb] mb-4">
            Meet Our Backers
          </h2>
          <p className=" text-gray-600 text-base sm:text-lg text-gray-600 mb-6">
            Join hands with investors, lenders, and supporters shaping
            Ethiopia’s future through Hamlin Crowdfunding.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <div className="flex flex-col items-center">
              <FaUsers className="text-[#1d6ceb] text-2xl mb-1" />
              <p className="text-sm text-green-800 font-semibold">
                Reward Backers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-[#1d6ceb] text-2xl mb-1" />
              <p className="text-sm text-green-800 font-semibold">
                Equity Investors
              </p>
            </div>
          </div>

          <Link
            to="/backers-investors"
            className="inline-block bg-btn text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BackersPreview;

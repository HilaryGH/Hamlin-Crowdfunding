import {
  FaHandshake,
  FaBuilding,
  FaLock,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import TestimonialSection from "./TestimonialSection";

const BackersSection = () => {
  return (
    <section id="backers" className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[450px] overflow-hidden shadow-lg mb-14">
        <img
          src="Finance leaders-bro.svg"
          alt="Backers Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Project & Business Backers / Investors
          </h2>
          <span className="block h-1 w-32 sm:w-52 bg-[#1d6ceb] mt-3 rounded"></span>
          <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
            At Hamlin Crowdfunding, we connect visionary backers with
            high-impact projects and business ventures across Ethiopia.
          </p>
        </div>
      </div>

      {/* Backer Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 px-4 sm:px-6 lg:px-16">
        {[
          {
            icon: <FaLightbulb />,
            title: "Project Investors",
            desc: "Fund creative, tech, and social impact projects with measurable outcomes.",
          },
          {
            icon: <FaBuilding />,
            title: "Business Backers",
            desc: "Invest in startups and SMEs across Ethiopia’s emerging industries.",
          },
          {
            icon: <FaLock />,
            title: "Lenders",
            desc: "Offer loans to vetted entrepreneurs and receive competitive returns.",
          },
          {
            icon: <FaHandshake />,
            title: "Equity Investors",
            desc: "Gain shares in high-growth ventures and become part of their journey.",
          },
          {
            icon: <FaUsers />,
            title: "Reward Backers",
            desc: "Get exclusive access or benefits from creative or social campaigns.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-green-50 p-6 rounded-2xl shadow-md border-l-4 border-[#1d6ceb] hover:shadow-lg transition duration-300"
          >
            <div className="text-green-600 text-3xl mb-4">{item.icon}</div>
            <h4 className="font-semibold text-green-800 text-lg mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Why Invest */}
      <div className="bg-green-50 rounded-2xl border-l-4 border-[#1d6ceb] mx-4 sm:mx-6 lg:mx-16 py-12 px-4 sm:px-8 mb-20">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-green-700 mb-8">
          Why Back with Hamlin?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base md:text-lg text-gray-700">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Rigorous Vetting:</strong> Every project and business is
              carefully evaluated.
            </li>
            <li>
              <strong>Secure Transactions:</strong> Transparent and protected
              processes.
            </li>
          </ul>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Growth Potential:</strong> Join emerging markets and
              support scalable ideas.
            </li>
            <li>
              <strong>Impact Focus:</strong> Empower innovation and economic
              development in Ethiopia.
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Call to Action */}
      <div className="text-center px-4 sm:px-6 lg:px-16 mb-20">
        <h4 className="text-lg sm:text-xl font-semibold mb-6 text-green-700">
          Be part of Ethiopia’s future economy.
        </h4>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-green-700 transition"
          >
            Explore Opportunities
          </a>
          <a
            href="#"
            className="border border-green-600 text-green-700 px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-green-100 transition"
          >
            Become a Backer
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackersSection;

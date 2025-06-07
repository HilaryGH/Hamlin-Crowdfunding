import {
  FaHandshake,
  FaBuilding,
  FaLock,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const BackersSection = () => {
  return (
    <section id="backers" className="bg-white">
      {/* Title over Background Image */}
      <div className="relative h-[500px]  overflow-hidden shadow-lg mb-10">
        <img
          src="startups.webp"
          alt="Backers Background"
          className="absolute inset-0 w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <div className="inline-block animate-fadeInUp delay-[200ms]">
            <h2 className="text-xl md:text-4xl font-bold text-white fade-in-up delay-1">
              Project & Business Backers / Investors
            </h2>
            <span className="block h-1 w-40 md:w-60 bg-[#1d6ceb] mt-2 mx-auto rounded"></span>
          </div>
          <p className="mt-4 text-gray-200 text-sm md:text-lg max-w-2xl fade-in-up delay-2">
            At Hamlin Crowdfunding, we connect visionary backers with
            high-impact projects and business ventures across Ethiopia.
          </p>
        </div>
      </div>

      {/* Backer Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-4 sm:px-6 lg:px-16">
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
            <div className="text-green-600 text-4xl mb-4">{item.icon}</div>
            <h4 className="font-semibold text-green-800 text-lg mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Invest */}
      <div className="bg-green-50 rounded-2xl border-l-4 border-[#1d6ceb] mp-4 sm:mp-6 mx-4 sm:mx-6 lg:mx-16 py-16 mb-20">
        <h3 className="text-2xl font-semibold text-center text-green-700 mb-8">
          Why Back with Hamlin?
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-base text-gray-700">
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

      {/* Testimonials */}
      <div className="mb-20 px-4 sm:px-6 lg:px-16">
        <h3 className="text-2xl font-semibold text-center text-green-700 mb-8">
          Voices of Our Backers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote:
                "Investing in an agritech startup through Hamlin was simple and promising.",
              name: "Elias M., Business Investor",
            },
            {
              quote:
                "Backed a youth-led project. Watching it succeed has been rewarding!",
              name: "Hanna G., Project Backer",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-green-200 rounded-xl p-6 shadow-sm"
            >
              <p className="italic text-gray-600">“{testimonial.quote}”</p>
              <p className="mt-4 font-semibold text-green-800">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center px-4 sm:px-6 lg:px-16 mb-16">
        <h4 className="text-xl font-semibold mb-6 text-green-700">
          Be part of Ethiopia’s future economy.
        </h4>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Explore Opportunities
          </a>
          <a
            href="#"
            className="border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition"
          >
            Become a Backer
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackersSection;

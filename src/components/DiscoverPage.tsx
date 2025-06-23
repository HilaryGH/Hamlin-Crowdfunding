import { MdFlag, MdOutlineEmojiObjects } from "react-icons/md";

const DiscoverPage = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Column */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d6ceb] mb-4">
            About Hamlin Crowdfunding
          </h1>
          <span className="block h-1 w-40 md:w-60 bg-[#22C55E] mt-2 mb-4 mx-auto md:mx-0 rounded"></span>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Crowdfund Your Tomorrow — Empowering growth, impact, and
            opportunity.
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2">
          <img
            src="Sponsor-bro.svg"
            alt="About Hamlin"
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#1d6ceb]">
          Who We Are
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          Hamlin Crowdfunding is Ethiopia’s premier intermediary service
          connecting visionary project creators with motivated backers. We
          support businesses, social initiatives, and community-led projects
          through equity, debt, reward, and donation crowdfunding models—all
          continuing to grow through 2030.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#22C55E] flex items-start gap-4">
          <MdFlag className="text-green-600 text-3xl" />
          <div>
            <h3 className="font-semibold text-xl text-[#1d6ceb]">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              To empower creators and backers with a seamless, transparent, and
              secure crowdfunding experience.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#22C55E] flex items-start gap-4">
          <MdOutlineEmojiObjects className="text-green-600 text-3xl" />
          <div>
            <h3 className="font-semibold text-xl text-[#1d6ceb]">Our Vision</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              To become Africa’s leading crowdfunding platform by 2030, driving
              financial inclusion and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md border-l-4 border-[#22C55E]">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#1d6ceb] mb-8">
          Why Choose Hamlin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <ul className="list-disc list-inside space-y-4">
            <li>
              Rigorous vetting ensures all campaigns meet our quality standards.
            </li>
            <li>Secure, transparent transactions with real-time dashboards.</li>
          </ul>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Scalable opportunity: support everything from grassroots to
              fast-growth ventures.
            </li>
            <li>
              Deep impact focus: empowering Ethiopian communities through access
              and innovation.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-6">
          Join Us on the Journey
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full hover:bg-green-700 transition"
          >
            See Campaigns
          </a>
          <a
            href="#contact"
            className="border border-green-600 text-green-700 px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full hover:bg-green-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;

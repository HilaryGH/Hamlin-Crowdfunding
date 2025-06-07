function Services() {
  const services = [
    {
      title: "Equity Crowdfunding",
      description:
        "Investors receive shares in exchange for their contributions, becoming partial owners of the project.",
    },
    {
      title: "Debt Crowdfunding",
      description:
        "Borrowers raise funds from multiple lenders and repay them over time with interest.",
    },
    {
      title: "Reward-Based Crowdfunding",
      description:
        "Supporters receive non-financial rewards, such as products, perks, or early access.",
    },
    {
      title: "Donation-Based Crowdfunding",
      description:
        "Raise money for charitable or personal causes with no expectation of financial return.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-white to-blue-50 text-dark"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d6ceb] mb-12 leading-snug">
          Explore the crowdfunding models we offer to support your initiatives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-[#22C55E] hover:border-[#22C55E] transition-transform duration-300 transform hover:scale-[1.03] flex flex-col justify-start"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1d6ceb]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

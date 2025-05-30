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
    <section className="py-12 px-6 bg-white text-dark">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-lg text-gray-600 mb-10">
          Overview of crowdfunding models offered
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1d6ceb]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

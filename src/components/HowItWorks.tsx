function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create a Campaign",
      text: "Sign up and set up your crowdfunding campaign with clear goals.",
    },
    {
      number: "2",
      title: "Choose a Model",
      text: "Select from Equity, Debt, Reward, or Donation-based crowdfunding.",
    },
    {
      number: "3",
      title: "Promote Your Project",
      text: "Share your campaign on social media and reach your audience.",
    },
    {
      number: "4",
      title: "Receive Funding",
      text: "Collect contributions and turn your ideas into reality!",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#1d6ceb] mb-4">
          How It Works
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-12">
          Hamlin Crowdfunding simplifies raising funds in four simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-md border-l-4 border-[#22C55E] rounded-xl p-6 lg:p-8 transition transform hover:shadow-xl hover:scale-[1.02] ${
                index % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              <div className="absolute -left-6 top-6 bg-[#22C55E] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1d6ceb] mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

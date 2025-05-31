function HowItWorks() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
        <p className="text-gray-600 text-lg mb-12">
          Hamlin Crowdfunding simplifies raising funds in four simple steps.
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Step 1 */}
          <div className="how-step z-10">
            <div className="step-number">1</div>
            <h3 className="step-title">Create a Campaign</h3>
            <p className="step-text">
              Sign up and set up your crowdfunding campaign with clear goals.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="arrow hidden md:block">
            <svg
              className="animated-arrow"
              width="60"
              height="24"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12 H50 M50 12 L44 6 M50 12 L44 18"
                stroke="#1d6ceb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="how-step z-10">
            <div className="step-number">2</div>
            <h3 className="step-title">Choose a Model</h3>
            <p className="step-text">
              Select from Equity, Debt, Reward, or Donation-based crowdfunding.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="arrow hidden md:block">
            <svg
              className="animated-arrow"
              width="60"
              height="24"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12 H50 M50 12 L44 6 M50 12 L44 18"
                stroke="#1d6ceb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="how-step z-10">
            <div className="step-number">3</div>
            <h3 className="step-title">Promote Your Project</h3>
            <p className="step-text">
              Share your campaign on social media and reach your audience.
            </p>
          </div>

          {/* Arrow 3 */}
          <div className="arrow hidden md:block">
            <svg
              className="animated-arrow"
              width="60"
              height="24"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12 H50 M50 12 L44 6 M50 12 L44 18"
                stroke="#1d6ceb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 4 */}
          <div className="how-step z-10">
            <div className="step-number">4</div>
            <h3 className="step-title">Receive Funding</h3>
            <p className="step-text">
              Collect contributions and turn your ideas into reality!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

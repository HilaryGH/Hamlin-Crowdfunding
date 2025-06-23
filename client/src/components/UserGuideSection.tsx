import React, { useState } from "react";

type GuideItem = {
  question: string;
  answer: string;
};

const guides: GuideItem[] = [
  {
    question: "How can I register as a startup?",
    answer:
      "Navigate to the 'Start a Campaign' page and fill in the required project and company details. Upload necessary documents and submit.",
  },
  {
    question: "How do backers show interest?",
    answer:
      "Go to the 'Investors & Backers' section, choose your interest type (Equity, Debt, Reward, Donation), and submit your details.",
  },
  {
    question: "How can I edit or track my submission?",
    answer:
      "Visit the 'User Dashboard', enter your email, and load your submission. You can edit details, check status, or withdraw interest.",
  },
  {
    question: "What happens after a startup is approved?",
    answer:
      "Approved startups will be contacted for further steps. Backers may also be matched with relevant projects for collaboration.",
  },
];

const UserGuideSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4" id="user-guide">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          User Guide & FAQ
        </h2>

        <div className="space-y-4">
          {guides.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-green-50 transition"
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserGuideSection;

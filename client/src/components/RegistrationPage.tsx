// RegistrationPage.tsx
import React, { useState } from "react";
import StartupRegistration from "./StartupRegistration";
import BackerRegistration from "./BackerRegistration.tsx";

const RegistrationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"startup" | "backer">("startup");

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Hamlin Crowdfunding Registration
      </h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("startup")}
          className={`px-4 py-2 rounded ${
            activeTab === "startup" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Startup
        </button>
        <button
          onClick={() => setActiveTab("backer")}
          className={`px-4 py-2 rounded ${
            activeTab === "backer" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Backer / Investor
        </button>
      </div>

      {activeTab === "startup" ? (
        <StartupRegistration />
      ) : (
        <BackerRegistration />
      )}
    </div>
  );
};

export default RegistrationPage;

import React, { useState } from "react";

type StartupFormData = {
  name: string;
  email: string;
  projectTitle: string;
  description: string;
  fundingGoal: string;
  companyName: string;
  companyAge: string;
  companyType: string;
  annualTurnover: string;
  registrationFile: File | null;
  pitchdeckFile: File | null;
  businessPlanFile: File | null;
  financialModelFile: File | null;
  foundersProfileFile: File | null;
  contingencyPlanFile: File | null;
  innovation: string;
  wantsCertificate: boolean;
  wantsNotification: boolean;
};

const StartupRegistration: React.FC = () => {
  const [formData, setFormData] = useState<StartupFormData>({
    name: "",
    email: "",
    projectTitle: "",
    description: "",
    fundingGoal: "",
    companyName: "",
    companyAge: "",
    companyType: "",
    annualTurnover: "",
    registrationFile: null,
    pitchdeckFile: null,
    businessPlanFile: null,
    financialModelFile: null,
    foundersProfileFile: null,
    contingencyPlanFile: null,
    innovation: "",
    wantsCertificate: false,
    wantsNotification: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredTextFields = [
      "name",
      "email",
      "projectTitle",
      "description",
      "fundingGoal",
      "companyName",
      "companyAge",
      "companyType",
      "annualTurnover",
      "innovation",
    ];

    for (let field of requiredTextFields) {
      if (!formData[field as keyof StartupFormData]) {
        setError("Please fill in all required text fields.");
        return;
      }
    }

    const requiredFiles = [
      "registrationFile",
      "pitchdeckFile",
      "businessPlanFile",
      "financialModelFile",
      "foundersProfileFile",
      "contingencyPlanFile",
    ];

    for (let fileField of requiredFiles) {
      if (!(formData[fileField as keyof StartupFormData] instanceof File)) {
        setError("Please upload all required documents.");
        return;
      }
    }

    const campaign = {
      ...formData,
      status: "approved",
      files: {
        registration: formData.registrationFile?.name,
        pitchdeck: formData.pitchdeckFile?.name,
        businessPlan: formData.businessPlanFile?.name,
        financialModel: formData.financialModelFile?.name,
        foundersProfile: formData.foundersProfileFile?.name,
        contingencyPlan: formData.contingencyPlanFile?.name,
      },
    };

    const existing = JSON.parse(localStorage.getItem("campaigns") || "[]");
    existing.push(campaign);
    localStorage.setItem("campaigns", JSON.stringify(existing));

    setSubmitted(true);
    setError("");

    setFormData({
      name: "",
      email: "",
      projectTitle: "",
      description: "",
      fundingGoal: "",
      companyName: "",
      companyAge: "",
      companyType: "",
      annualTurnover: "",
      registrationFile: null,
      pitchdeckFile: null,
      businessPlanFile: null,
      financialModelFile: null,
      foundersProfileFile: null,
      contingencyPlanFile: null,
      innovation: "",
      wantsCertificate: false,
      wantsNotification: false,
    });
  };

  const InputGroup = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    required = true,
  }: {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
  }) => (
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-800">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-sm md:text-base"
      />
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-4 md:p-8 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-700">
        Startup Campaign Registration
      </h2>

      {error && <p className="text-red-600 font-medium">{error}</p>}
      {submitted && (
        <p className="text-green-600 font-medium">
          ✅ Campaign submitted successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Info */}
        <section className="bg-gray-200 p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            1. Your Info
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputGroup
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputGroup
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputGroup
              label="Project Title"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
            />
            <InputGroup
              label="Funding Goal (USD)"
              name="fundingGoal"
              value={formData.fundingGoal}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-2 text-gray-800">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Company Info */}
        <section className="bg-gray-200 p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            2. Company Eligibility
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputGroup
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <InputGroup
              label="Company Age"
              name="companyAge"
              value={formData.companyAge}
              onChange={handleChange}
            />
            <InputGroup
              label="Company Type"
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
            />
            <InputGroup
              label="Annual Turnover"
              name="annualTurnover"
              value={formData.annualTurnover}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* File Uploads */}
        <div className="bg-gray-200 p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            3. Upload Required Documents
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              ["Business Registration", "registrationFile"],
              ["Pitch Deck", "pitchdeckFile"],
              ["Business Plan", "businessPlanFile"],
              ["Financial Model", "financialModelFile"],
              ["Founders Profile", "foundersProfileFile"],
              ["Contingency Plan", "contingencyPlanFile"],
            ].map(([label, name], index) => (
              <div key={name} className="w-full md:w-[48%]">
                <label className="block font-medium mb-1 text-gray-800">
                  {index + 1}. {label}
                </label>
                <input
                  type="file"
                  name={name}
                  onChange={handleFileChange}
                  className="w-full text-sm md:text-base bg-gray-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Innovation */}
        <section className="bg-gray-200 p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            4. What Makes You Innovative?
          </h3>
          <textarea
            name="innovation"
            value={formData.innovation}
            onChange={handleChange}
            rows={4}
            placeholder="Explain your innovation..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        {/* Extras */}
        <section className="bg-gray-200 p-6 rounded-lg border space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            5. Recognition & Updates
          </h3>
          <div className="flex flex-col sm:flex-row sm:gap-10">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                name="wantsCertificate"
                checked={formData.wantsCertificate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    wantsCertificate: e.target.checked,
                  }))
                }
              />
              I want to receive an e-certificate
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                name="wantsNotification"
                checked={formData.wantsNotification}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    wantsNotification: e.target.checked,
                  }))
                }
              />
              Notify me about updates related to my submission
            </label>
          </div>
        </section>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base md:text-lg px-6 py-2 rounded-md shadow-sm"
          >
            Submit Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartupRegistration;

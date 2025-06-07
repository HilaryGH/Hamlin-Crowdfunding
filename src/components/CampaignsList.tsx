// src/components/CampaignsList.tsx

import React, { useEffect, useState } from "react";

type Campaign = {
  name: string;
  email: string;
  projectTitle: string;
  description: string;
  fundingGoal: string;
  status?: string;
};

const CampaignsList: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("campaigns");
    if (stored) {
      const parsed = JSON.parse(stored) as Campaign[];
      const approved = parsed.filter((c) => c.status === "approved");
      setCampaigns(approved);
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Live Campaigns</h2>
      {campaigns.length === 0 && <p>No campaigns yet.</p>}
      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{campaign.projectTitle}</h3>
            <p className="text-gray-600">By: {campaign.name}</p>
            <p className="mt-2">{campaign.description}</p>
            <p className="mt-2 font-semibold text-green-600">
              Goal: ${campaign.fundingGoal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsList;

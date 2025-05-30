import { useParams } from "react-router-dom";
import { projects } from "../Data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="text-center py-20 text-gray-600">Project not found.</div>
    );

  const percentage = Math.round((project.raised / project.goal) * 100);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.description}</p>

      {/* Funding Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white border rounded-lg shadow">
          <p className="text-2xl font-bold text-indigo-600">
            ${project.raised}
          </p>
          <p className="text-sm text-gray-500">Raised of ${project.goal}</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow">
          <p className="text-2xl font-bold text-green-600">{percentage}%</p>
          <p className="text-sm text-gray-500">Funded</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow">
          <p className="text-2xl font-bold text-red-600">
            {project.daysLeft} days
          </p>
          <p className="text-sm text-gray-500">Left</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-10">
        <div
          className="h-full bg-indigo-600"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Rewards Section */}
      {project.type === "Reward" && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🎁 Backer Rewards</h2>
          <div className="space-y-4">
            {project.rewards.map((reward, index) => (
              <div key={index} className="p-4 border bg-gray-50 rounded-md">
                <p className="font-semibold">
                  {reward.tier} – {reward.reward}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Creator Info + CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            By: {project.creator.name}
          </h3>
          <p className="text-sm text-gray-600">
            {project.creator.org} | {project.creator.location}
          </p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700">
          {project.type === "Equity" ? "Invest Now" : "Back This Project"}
        </button>
      </div>
    </section>
  );
};

export default ProjectDetail;

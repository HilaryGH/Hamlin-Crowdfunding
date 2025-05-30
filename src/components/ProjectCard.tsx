import { Link } from "react-router-dom";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
}

export default function ProjectCard({
  id,
  title,
  description,
  raised,
  goal,
}: ProjectProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="mb-3">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${(raised / goal) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Raised ${raised} of ${goal}
        </p>
      </div>
      <Link
        to={`/project/${id}`}
        className="inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

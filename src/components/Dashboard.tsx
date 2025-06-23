import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role") || "user";
  const name = localStorage.getItem("name") || "Anonymous";

  useEffect(() => {
    // 🔐 Redirect to login if not authenticated
    if (!token || !role) {
      navigate("/login");
    }

    // 🔄 Redirect to admin dashboard
    if (role === "admin") {
      navigate("/admin");
    }
  }, [role, token, navigate]);

  // 🧠 Get user initials
  const initials = name
    .split(" ")
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="p-6">
      {/* User Profile */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold">Hi, {name}</p>
          <p className="text-sm text-gray-600">Role: {role}</p>
        </div>
      </div>

      {/* User Dashboard */}
      <UserDashboard />
    </div>
  );
};

export default Dashboard;

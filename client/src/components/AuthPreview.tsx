import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPreview = () => {
  const [showForm, setShowForm] = useState<"login" | "register" | null>(null);

  return (
    <section
    // push everything down by 4rem (64px) so it sits below your navbar
    >
      <div
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('login.svg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-full max-w-md">
          {!showForm && (
            <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-6">Welcome</h2>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600 transition"
                onClick={() => setShowForm("login")}
              >
                Login
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => setShowForm("register")}
              >
                Sign Up
              </button>
            </div>
          )}

          {showForm === "login" && <Login />}
          {showForm === "register" && <Register />}
        </div>
      </div>
    </section>
  );
};

export default AuthPreview;

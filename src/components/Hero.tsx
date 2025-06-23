import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const goAuth = () => {
    // Pass along the page you want them to end up on after login
    navigate("/auth?next=/create-campaign");
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: "url('hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Crowdfund Your Tomorrow
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
          Together, we invest in purpose-driven ideas that shape a brighter
          future
        </p>

        {/* Start Campaign Button */}
        <button
          onClick={() => navigate("/register")}
          className="mt-6 sm:mt-8 bg-[#1d6ceb] text-white px-6 py-3 rounded-full hover:bg-[#4c8ef0] transition"
        >
          Start Your Campaign
        </button>

        {/* Login/Signup Text Button */}
        <button
          onClick={goAuth}
          className="block mx-auto mt-4 sm:mt-6 text-white underline hover:text-blue-200"
        >
          Already have an account? Login / Signup
        </button>
      </div>
    </section>
  );
}

export default Hero;

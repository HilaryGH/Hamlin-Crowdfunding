import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: "url('hero.jpg')" }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white hero-text">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold fade-in-up delay-1">
          Crowdfund Your Tomorrow
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 fade-in-up delay-2">
          Together, we invest in purpose-driven ideas that shape a brighter
          future
        </p>
        <Link
          to="/register"
          onClick={() => navigate("/register")}
          className="inline-block mt-6 sm:mt-8 bg-[#1d6ceb] text-white text-sm sm:text-base px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#4c8ef0] transition-colors fade-in-up delay-3"
        >
          Start Your Campaign
        </Link>
      </div>
    </section>
  );
}

export default Hero;

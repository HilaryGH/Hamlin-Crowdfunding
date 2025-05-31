import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: "url('hero.jpg')" }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white hero-text">
        <h1 className="text-4xl md:text-5xl font-bold fade-in-up delay-1">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl mt-4 fade-in-up delay-2">
          We help you grow your business with smart solutions and creative
          ideas.
        </p>
        <Link
          to="/start"
          className="inline-block mt-6 bg-[#1d6ceb] text-white px-6 py-3 rounded-full hover:bg-[#4c8ef0] fade-in-up delay-3"
        >
          Start Your Campaign
        </Link>
      </div>
    </section>
  );
}

export default Hero;

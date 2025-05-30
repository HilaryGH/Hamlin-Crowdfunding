import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      className="bg-cover bg-center  min-h-[400px]  md:flex-row items-center justify-between px-6 py-12"
      style={{ backgroundImage: "url('hero.jpg')" }}
    >
      {/* center: the text*/}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-white mb-6">
          We help you grow your business with smart solutions and creative
          ideas.
        </p>
        <Link
          to="/start"
          className="bg-[#1d6ceb] text-white px-6 py-3 rounded-full hover:bg-[#4c8ef0]"
        >
          Start Your Campaign
        </Link>
      </div>
    </section>
  );
}

export default Hero;

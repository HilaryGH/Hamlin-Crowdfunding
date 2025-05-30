function Footor() {
  return (
    <>
      <section className="bg-[#065F46] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="mb-6 text-gray-200">
            Support innovative projects and empower communities across Ethiopia.
          </p>
          <button className="bg-[#22C55E] text-white px-6 py-3 rounded-full hover:bg-[#15803D] transition">
            Discover Projects
          </button>
        </div>
      </section>
      <footer className="bg-[#022C22] text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Hamlin Crowdfunding. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footor;

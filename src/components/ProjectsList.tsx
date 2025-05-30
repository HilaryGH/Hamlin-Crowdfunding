import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../Data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: icon library

const ProjectsList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      {/* Scroll Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-[300px] flex-shrink-0">
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              raised={project.raised}
              goal={project.goal}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;

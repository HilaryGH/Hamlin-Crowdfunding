import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  _id: string;
  name: string;
  quote: string;
  image?: string;
};

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };
    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, testimonials.length - itemsPerPage)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="mb-24 px-4 sm:px-6 lg:px-16">
      <h3 className="text-3xl font-extrabold text-center text-green-700 mb-12">
        Voices of Our Backers
      </h3>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={handlePrev}
          className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full shadow disabled:opacity-40 transition"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full shadow disabled:opacity-40 transition"
          disabled={currentIndex + itemsPerPage >= testimonials.length}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="bg-white border border-green-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-start justify-start min-h-[320px] h-auto"
          >
            <div className="flex items-center gap-4 mb-4 w-full">
              {testimonial.image ? (
                <img
                  src={`http://localhost:5000/uploads/${testimonial.image}`}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border border-green-300 flex-shrink-0"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
              )}
              <p className="font-semibold text-green-900 text-base truncate">
                {testimonial.name}
              </p>
            </div>

            <p className="italic text-gray-700 text-[16px] leading-relaxed break-words w-full">
              “{testimonial.quote}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;

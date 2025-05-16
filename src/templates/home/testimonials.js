
import TestimonialCard from "@/components/testimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <div className="bg-primary-cuny-blue py-24 sm:py-32">
      <div className="max-width-wrapper">

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-center text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-white text-shadow-lg mb-4">
            Real Stories, {' '}
            <span className="text-secondary-chartreuse">Real Impact</span>
          </h2>
          <p className="text-center text-white/80 text-2xl font-semibold">Discover how our programs have shaped the lives and careers of students and alumni. These personal stories highlight the real-world impact of their experiences—and the lasting connections they've built along the way.
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.author.name}-${index}`} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
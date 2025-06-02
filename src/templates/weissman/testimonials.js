
import TestimonialCard from "@/components/testimonialCard";
import { testimonials } from "@/templates/weissman/testimonialsData";

export default function Testimonials() {
  return (
    <div className="bg-secondary-thistle py-24 sm:py-32">
      <div className="max-width-wrapper">

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-center text-[180px] leading-[130px] uppercase font-semibold font-field-gothic text-neutral-charcoal mb-4">
            <span className="text-[100px] leading-[80px] text-neutral-charcoal">Voices of Weissman</span><br/>
            <span className="text-neutral-charcoal">Stories That Inspire</span>
          </h2>
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
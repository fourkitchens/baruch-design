import Testimonial from "@/components/testimonial";
import { alumniData } from "@/data/alumni";

export default function Testimonials() {
  return (
    <section className="py-24 space-y-16 bg-neutral-slate">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-pretty text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-white text-shadow-lg">
          Your Future, Accelerated
        </h2>
        <h3 className="text-2xl font-normal text-white/85 text-shadow-lg">Let Zicklin help you leverage your experience, expand your network, and take the next bold step in your career journey.</h3>
      </div>
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {alumniData.map((alumni, i) => (
          <Testimonial key={alumni.id} {...alumni} imageSide={i % 2 === 1 ? "right" : "left"} />
        ))}
      </div>
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-semibold text-white text-shadow-lg">Continue Your Journey with Confidence</h2>
        <h3 className="text-xl font-normal text-white/85 text-shadow-lg">Whether you’re exploring new opportunities, aiming for leadership, or making a bold pivot, you’re not doing it alone. Zicklin’s career resources, vibrant community, and global network are here for you—now and always. Let’s keep moving forward, together.</h3>
        <div className="flex justify-center gap-4 py-2 mt-8 text-2xl">
          <a href="/apply" className="bg-primary-cuny-blue ring-1 ring-primary-cuny-blue text-white px-6 py-2 font-bold rounded-sm transition-all shadow-sm/40">
            Apply Now
          </a>
          <a href="/visit" className="bg-transparent ring-1 ring-white text-white px-6 py-2 font-bold rounded-sm transition-colors">
            Plan a Visit
          </a>
        </div>
      </div>
    </section>
  );
}
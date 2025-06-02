import Testimonial from "@/components/testimonial";
import laraAbrash from "@/assets/images/marxe/premium_photo-1661683653197-ca2d0aab80eb copy.jpg";
import sonamGanapathy from "@/assets/images/marxe/premium_photo-1664302962861-0b41a52de902 copy.jpg";
import johnGomes from "@/assets/images/marxe/tashi-nyima-bCfxJ31Pt6E-unsplash.jpg";

const alumniData = [
  {
    id: 1,
    name: "KELLY ANN DIXON, MPA '11",
    title: "Senior Policy Advisor, NYC Mayor’s Office",
    image: laraAbrash,
    quote: "At Marxe, I didn’t just learn how policy works—I learned how to shape it. The practical experience, the incredible diversity of voices, and the support from professors gave me the confidence to lead in government."
  },
  {
    id: 2,
    name: "MARCUS LIN, MIA '19",
    title: "Program Officer, International Development Agency",
    image: johnGomes,
    quote: "The Marxe School gave me more than a degree—it gave me a mission. Collaborating with peers from around the world challenged my thinking and prepared me to create lasting impact across borders.",
    videoUrl: "https://youtu.be/X0TPrC5BpVI"
  },
  {
    id: 3,
    name: "FATIMA RAHMAN, MSEd '16",
    title: "Director of Community Engagement, Citywide Nonprofit",
    image: sonamGanapathy,
    quote: "Coming from an education background, I found Marxe opened new doors in public service. The focus on equity, real-world casework, and career mentoring helped me translate passion into action."
  }
]; 


import Button from "@/components/button";

export default function Testimonials() {
  return (
    <section className="py-24 space-y-16 bg-secondary-grape">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-pretty text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-white text-shadow-lg">
          Your Journey, Transformed
        </h2>
        <h3 className="text-2xl font-normal text-white/85 text-shadow-lg">
          At Marxe, education is more than a degree—it’s a turning point. Reimagine your potential with a curriculum designed to meet your ambitions head-on.
        </h3>
      </div>
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {alumniData.map((alumni, i) => (
          <Testimonial key={alumni.id} {...alumni} imageSide={i % 2 === 1 ? "right" : "left"} />
        ))}
      </div>
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-semibold text-white text-shadow-lg">Keep Growing, Keep Leading</h2>
        <h3 className="text-xl font-normal text-white/85 text-shadow-lg">Whether you're stepping into public service, shifting to a policy role, or deepening your impact in the nonprofit world, Marxe supports your path forward. Tap into our career tools, expert faculty, and supportive alumni network—your journey doesn't end here, it evolves.</h3>
        <div className="flex justify-center gap-4 py-2 mt-8 text-2xl">
          <Button href="/apply" type="tangerine" size="lg">
            Apply Now
          </Button>
          <Button href="/apply" type="ghost" size="lg">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
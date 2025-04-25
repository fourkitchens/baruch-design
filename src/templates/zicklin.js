import Header from "@/components/header";
import Hero from "@/templates/zicklin/hero";
import SlidingCards from "@/components/slidingCards";
import ImageSide from "@/components/imageSide";
import photo from "@/assets/images/zicklin/64306BCB-BBC9-45AD-990A-40BE70ED5835.png";
import StatsPhotoBg from "@/components/statsPhotoBg";
import statsImage from "@/assets/images/Baruch-students_NVC.jpg";
import { alumniData } from "@/data/alumni";
import Testimonial from "@/components/testimonial";

const stats = [
  {
    id: 4,
    header: '#1',
    subhead: 'Full-Time MBA in New York City & New York State Among Public Institutions',
    attribution: '2024 U.S. News & World Report'
  },
  {
    id: 5,
    header: '#1',
    subhead: 'Evening MBA Program in New York City & New York State Among Public Institutions',
    attribution: '2024 U.S. News & World Report'
  },
  {
    id: 6,
    header: '#1',
    subhead: 'Accounting MBA Program in New York City & New York State Among Public Institutions',
    attribution: '2024 U.S. News & World Report'
  },
]


export default function Zicklin() {
  return (
    <>
      <Header />
      <Hero />
      <SlidingCards />
      <ImageSide image={photo} alt="Photo" bg="bg-primary-cuny-blue">
        <h1 className="mt-24 mb-8 text-pretty text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-white sm:mt-10">
          Zicklin {' '}
          <span className="text-secondary-chartreuse">programs</span>
        </h1>
        <p className="text-xl font-normal mb-16">Zicklin offers flexible programs for every stage of your career—undergraduate to executive, online to global. Discover the tools and connections to succeed in business.</p>
        <div>
          <ul className="flex flex-col gap-6 text-3xl font-semibold">
            <li><a href="#" className="link link-midtown-blue-bg">Undergraduate /BBA</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">MBA</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Master of Science</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Executive Degrees</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">PhD in Business</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Online Degrees</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Global Zicklin</a></li>
          </ul>
        </div>
      </ImageSide>
      <StatsPhotoBg image={statsImage} stats={stats}/>
      
      {/* <section className="py-24 space-y-16 bg-gradient-to-r from-neutral-pearl via-neutral-pearl-dark to-neutral-pearl-dark"> */}
      <section className="py-24 space-y-16 bg-neutral-slate">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-7xl font-semibold text-white text-shadow-lg">
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
    </>
  );
} 
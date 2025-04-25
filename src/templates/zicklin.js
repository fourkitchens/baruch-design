import Header from "@/components/header";
import Hero from "@/templates/zicklin/hero";
import SlidingCards from "@/components/slidingCards";
import ImageSide from "@/components/imageSide";
import photo from "@/assets/images/zicklin/64306BCB-BBC9-45AD-990A-40BE70ED5835.png";
import StatsPhotoBg from "@/components/statsPhotoBg";
import statsImage from "@/assets/images/Baruch-students_NVC.jpg";
import Testimonials from "@/templates/zicklin/testimonials";
import Footer from "@/components/footer";
import News from "@/templates/zicklin/news";
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
      <Testimonials />
      <News />
      <Footer />
    </>
  );
} 
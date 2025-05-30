import Header from "@/components/header";
import Hero from "@/templates/marxe/hero";
import SlidingCards from "@/components/slidingCards";
import ImageSide from "@/components/imageSide";
import photo from "@/assets/images/zicklin/64306BCB-BBC9-45AD-990A-40BE70ED5835.png";
import Testimonials from "@/templates/marxe/testimonials";
import Footer from "@/components/footer";
import News from "@/templates/marxe/news";
import Stats from "@/components/stats";
import undergraduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-5.png";
import graduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-4.png";
import workingProfessionalsImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-1.jpg";

const stats = [
  {
    id: 1,
    header: '92%',
    subhead: 'MPA Graduate Employment Rate (2023–24)',
    attribution: 'Marxe Graduate Outcomes Report'
  },
  {
    id: 2,
    header: '100%',
    subhead: 'Executive MPA Graduate Employment Rate (2022–23)',
    attribution: 'Marxe Graduate Outcomes Report'
  },
  {
    id: 3,
    header: '#34',
    subhead: 'National Ranking for MPA Programs',
    attribution: 'U.S. News & World Report'
  },
];

const audienceData = [
  {
    image: undergraduateImage,
    audience: "Undergraduate",
    title: "Meet Jamal, Public Service Advocate",
    description: "Jamal is majoring in Public Affairs and interning with a city council member. At Marxe, he’s gaining firsthand experience in civic leadership.",
    cta: "Explore Public Service Pathways"
  },
  {
    image: graduateImage,
    audience: "Graduate",
    title: "Meet Lila, Future Urban Planner",
    description: "Lila is earning her MPA in Urban Development. She’s using data-driven analysis to help build equitable, resilient cities through Marxe’s graduate curriculum.",
    cta: "Advance with Graduate Programs"
  },
  {
    image: workingProfessionalsImage,
    audience: "Working Professionals",
    title: "Meet Daniel, Nonprofit Changemaker",
    description: "Daniel balances his role at a nonprofit with Marxe’s Executive MPA program, developing the skills to lead policy initiatives and expand community impact.",
    cta: "Level Up Your Leadership"
  },
];

export default function Marxe() {
  return (
    <>
      <Header />
      <Hero />

      <ImageSide image={photo} alt="Photo" bg="bg-primary-cuny-blue">
        <h1 className="mt-24 mb-8 text-pretty uppercase font-semibold font-sans-xcondensed text-8xl text-white sm:mt-10">
          {/* Zicklin {' '} */}
          <span>programs</span>
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

      <Stats stats={stats} />
      <SlidingCards data={audienceData} />
      
      <Testimonials />
      <News />
      <Footer />
    </>
  );
} 
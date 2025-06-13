import Header from "@/components/header";
import Hero from "@/templates/marxe/hero";
import SlidingCards from "@/components/slidingCards";
import ImageSide from "@/components/imageSide";
import photo from "@/assets/images/marxe/492231503_1601674957431771_4210203510290507218_n.jpg";
import Testimonials from "@/templates/marxe/testimonials";
import Footer from "@/components/footer";
import News from "@/templates/marxe/news";
import Stats from "@/components/stats";
import undergraduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-5 OLD.jpg";
import graduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-4 OLD.jpg";
import workingProfessionalsImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-1 OLD.jpg";

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
          <span>programs</span>
        </h1>
        <p className="text-xl font-normal mb-16">
          The Marxe School offers comprehensive programs in public and international affairs—from undergraduate to executive-level degrees. Gain the skills to lead and serve in the public, nonprofit, and private sectors.
        </p>
        <div>
          <ul className="flex flex-col gap-6 text-3xl font-semibold">
            <li><a href="#" className="link link-midtown-blue-bg">Undergraduate</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Graduate</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Certificates</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Accelerated Programs</a></li>
          </ul>
        </div>
      </ImageSide>

      <Stats stats={stats} />
      <SlidingCards data={audienceData} schoolColor="secondary-chartreuse" />
      
      <Testimonials />
      <News />
      <Footer />
    </>
  );
} 
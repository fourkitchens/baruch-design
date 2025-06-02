import Header from "@/components/header";
import Hero from "@/templates/weissman/hero";
import SlidingCards from "@/components/slidingCards";
import ImageSide from "@/components/imageSide";
import photo from "@/assets/images/weissman/0D4B5705-D3D6-42CB-B8E4-8AB14DC543E9.png";
import Testimonials from "@/templates/weissman/testimonials";
import Footer from "@/components/footer";
import News from "@/templates/weissman/news";
import Stats from "@/components/stats";
import undergraduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-5.png";
import graduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-4.png";
import workingProfessionalsImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-1.jpg";

const stats = [
  {
    id: 1,
    header: '#1',
    subhead: 'Top-ranked Financial Engineering Program in North America',
    attribution: 'QuantNet 2024 Rankings'
  },
  {
    id: 2,
    header: '200+',
    subhead: 'Full-time Faculty Members',
    attribution: 'Weissman School of Arts and Sciences'
  },
  {
    id: 3,
    header: '2,600+',
    subhead: 'Undergraduate Majors',
    attribution: 'Weissman School of Arts and Sciences'
  },
];

const audienceData = [
  {
    image: undergraduateImage,
    audience: "Undergraduate",
    title: "Meet Amina, Aspiring Neuroscientist",
    description: "Amina is exploring the human brain while majoring in Psychology. Through Weissman’s undergraduate research programs, she’s preparing for medical school and beyond.",
    cta: "Begin Your Academic Journey"
  },
  {
    image: graduateImage,
    audience: "Graduate",
    title: "Meet Eli, Future Policy Leader",
    description: "With a master’s in Public Affairs, Eli is learning to shape public policy through data and equity-driven decision-making—turning theory into impact.",
    cta: "Grow with Graduate Studies"
  },
  {
    image: workingProfessionalsImage,
    audience: "Working Professionals",
    title: "Meet Sofia, Lifelong Learner and Educator",
    description: "Sofia teaches by day and studies by night. Her MA in English Literature from Weissman is deepening her expertise and enriching her classroom.",
    cta: "Enhance Your Professional Path"
  },
];

export default function Weissman() {
  return (
    <>
      <Header />
      <Hero />

      <ImageSide image={photo} alt="Photo" bg="bg-primary-cuny-blue">
        <h1 className="mt-24 mb-8 text-pretty uppercase font-semibold font-sans-xcondensed text-8xl text-white sm:mt-10">
          {/* Zicklin {' '} */}
          <span>programs</span>
        </h1>
        <p className="text-xl font-normal mb-16">
          The Weissman School of Arts and Sciences at Baruch College offers a diverse array of undergraduate and graduate programs in the arts, humanities, and sciences, fostering critical thinking, communication, and global awareness to prepare students for various professional paths and civic engagement.
        </p>
        <div>
          <ul className="flex flex-col gap-6 text-3xl font-semibold">
            <li><a href="#" className="link link-midtown-blue-bg">Arts and Humanities</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Mathematics and Sciences</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Social Sciences</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Interdisciplinary Studies</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Ad-Hoc Major Options</a></li>
            <li><a href="#" className="link link-midtown-blue-bg">Graduate Programs</a></li>

            
          </ul>
        </div>
      </ImageSide>

      <Stats stats={stats} />
      <SlidingCards data={audienceData} schoolColor="secondary-thistle" />
      
      <Testimonials />
      <News />
      <Footer />
    </>
  );
} 
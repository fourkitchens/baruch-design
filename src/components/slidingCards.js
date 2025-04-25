import heroImage from "@/assets/images/zicklin/photo-1570560259107-4391b020e73d.avif";
import Image from "next/image";
import clsx from "clsx";
import undergraduateImage from "@/assets/images/230621-Mario-Morgado-255.png";
import graduateImage from "@/assets/images/gettyimages-1132123971-2048x2048.jpg";
import workingProfessionalsImage from "@/assets/images/gettyimages-2094337676-2048x2048.jpg";

const audienceData = [
  {
    image: undergraduateImage,
    audience: "Undergraduate",
    title: "Meet Jordan, Future Finance Leader",
    description: "Jordan started their journey at Zicklin with a passion for numbers and curiosity about the global economy. Through our BBA program in finance, they're building the skills and network to shape the financial world.",
    cta: "Start Your Business Journey"
  },
  {
    image: graduateImage,
    audience: "Graduate",
    title: "Meet Priya, Career Changer Turned Analyst",
    description: "After years in healthcare, Priya came to Zicklin to pivot her career. With our MS in Business Analytics, she’s turning data into decisions and stepping into a new professional chapter.",
    cta: "Advance Your Career with Zicklin"
  },
  {
    image: workingProfessionalsImage,
    audience: "Working Professionals",
    title: "Meet Luis, Rising Executive",
    description: "Luis balances work, life, and ambition. With Zicklin’s Executive MBA, he’s gaining strategic insight and leadership skills to elevate his career—without putting it on pause.",
    cta: "Elevate Your Expertise"
  },
];

export default function SlidingCards({data = audienceData}) {
  return (
    <section className="relative z-10 flex h-[70vh] group/audiences">
      {data.map((item, index) => ( 
        <div className="bg-secondary-chartreuse flex-1 hover:flex-1/2 transition-all duration-300 cursor-pointer bg-center bg-cover relative group delay-50">1
          <Image src={item.image} alt="Baruch Students" className="absolute inset-0 z-10 size-full object-cover" />
          <div className={clsx(
            "absolute inset-0 z-10",
            "bg-gradient-to-b from-primary-sky to-primary-cuny-blue mix-blend-multiply opacity-70",
            "group-hover:bg-gradient-to-b group-hover:from-primary-sky group-hover:to-primary-indigo group-hover:mix-blend-multiply group-hover:opacity-100",
            "transition-all duration-300"
          )} />
          <div className="relative p-8 z-10 space-y-4 overflow-hidden">
            <h2 className="text-xl font-semibold text-secondary-lemonade uppercase text-shadow-lg/30">{item.audience}</h2>
            <h3 className="text-white font-league-gothic text-7xl leading-[0.9] uppercase text-shadow-lg/30">{item.title}</h3>
            <div className="-translate-x-[150%] delay-50 group-hover:translate-x-0 transition-all duration-300 space-y-6">
              <p className="text-white text-2xl font-medium">{item.description}</p>
              <p className="">
                <a href="#" className="bg-secondary-tangerine text-white px-4 py-2 font-bold rounded-sm transition-colors">
                  {item.cta}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}


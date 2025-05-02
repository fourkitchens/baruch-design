import heroImage from "@/assets/images/zicklin/photo-1570560259107-4391b020e73d.avif";
import Image from "next/image";
import clsx from "clsx";
import undergraduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-5.png";
import graduateImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-4.png";
import workingProfessionalsImage from "@/assets/images/zicklin/Baruch-Zicklin-Spotlights-Student-Portrait/Baruch-Student-Portraits-1.jpg";

const audienceData = [
  {
    image: undergraduateImage,
    audience: "Undergraduate",
    title: "Meet Jordan, Future Finance Leader",
    description: "Jordan is building the skills and network to shape the financial world through Zicklin’s BBA in Finance.",
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
        <div className="bg-secondary-chartreuse flex-1 transition-all duration-300 cursor-pointer bg-center bg-cover relative group delay-50 pt-32 flex flex-col justify-end">1
          <Image src={item.image} alt="Baruch Students" className="absolute inset-0 z-10 size-full object-cover" />
          <div className={clsx(
            "absolute inset-0 z-10",
            "bg-gradient-to-b from-primary-sky to-primary-indigo mix-blend-multiply opacity-100",
          )} />
          <div className="relative p-8 z-10 space-y-2 overflow-hidden min-h-[340px] mt-auto">
            <h2 className="text-2xl font-sans-xcondensed font-semibold text-secondary-lemonade uppercase text-shadow-lg/30 text-balance">{item.audience}</h2>
            <h3 className="text-white font-sans-xcondensed font-semibold text-5xl leading-[0.9] uppercase text-shadow-lg/30 text-balance">{item.title}</h3>
            {/* <div className="-translate-x-[150%] delay-50 group-hover:translate-x-0 transition-all duration-300 space-y-6 hidden group-hover:block"> */}
            <div className="space-y-6">
              <p className="text-white/86 text-lg font-medium text-shadow-lg/30 leading-tight">{item.description}</p>
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


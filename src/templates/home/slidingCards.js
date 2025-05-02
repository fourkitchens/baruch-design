import heroImage from "@/assets/images/zicklin/photo-1570560259107-4391b020e73d.avif";
import Image from "next/image";
import clsx from "clsx";
import undergraduateImage from "@/assets/images/home/245ED0EC-4EC3-4E54-B606-00FC6B443B07.png";
import graduateImage from "@/assets/images/home/918E1E12-411B-4577-9DC5-4ACA07A7CEDA.png";
import workingProfessionalsImage from "@/assets/images/home/A0065A16-7F34-4DD7-819C-7A2CB8ECD83A.png";

const audienceData = [
  {
    image: undergraduateImage,
    audience: "Prospective Undergraduate Students",
    title: "Discover Your Future at Baruch",
    description: "Find your major, plan your future, and explore your NYC life.",
    cta: "Start Your Journey"
  },
  {
    image: graduateImage,
    audience: "Graduate Students",
    title: "Advance with Graduate Studies",
    description: "Advance your career with master’s and doctoral programs in business, public affairs, and the arts.",
    cta: "Explore Graduate Programs"
  },
  {
    image: workingProfessionalsImage,
    audience: "Current Students",
    title: "Resources to Help You Thrive",
    description: "Access the tools, services, and support you need to thrive.",
    cta: "Student Resources"
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

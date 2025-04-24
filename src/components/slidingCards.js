import heroImage from "@/assets/images/zicklin/photo-1570560259107-4391b020e73d.avif";
import Image from "next/image";
import clsx from "clsx";
import undergraduateImage from "@/assets/images/230621-Mario-Morgado-255.png";
import graduateImage from "@/assets/images/gettyimages-1132123971-2048x2048.jpg";
import workingProfessionalsImage from "@/assets/images/gettyimages-2094337676-2048x2048.jpg";

const audienceData = [
  {
    image: undergraduateImage,
    title: "Undergraduate Students",
    description: "Begin your business journey with a BBA in accounting, finance, marketing, international business, and more.",
    cta: "Start Your Business Journey"
  },
  {
    image: graduateImage,
    title: "Graduate Students",
    description: "Advance your career with our MBA, Executive MBA, or MS programs in high-demand areas like business analytics, information systems, and healthcare administration.",
    cta: "Advance Your Career with Zicklin"
  },
  {
    image: workingProfessionalsImage,
    title: "Working Professionals",
    description: "Elevate your expertise with flexible programs designed for professionals ready to take the next step in their careers.",
    cta: "Elevate Your Expertise"
  },
];

export default function SlidingCards({data = audienceData}) {
  return (
    <section className="relative z-10 flex min-h-[70vh] group/audiences">
        {data.map((item, index) => ( 
          <div className="bg-secondary-chartreuse flex-1 hover:flex-1/2 transition-all duration-300 cursor-pointer bg-center bg-cover relative group delay-50">1
            <Image src={item.image} alt="Baruch Students" className="absolute inset-0 z-10 size-full object-cover" />
            <div className={clsx(
              "absolute inset-0 z-10",
              "bg-gradient-to-b from-primary-sky to-primary-cuny-blue mix-blend-multiply opacity-70",
              "group-hover:bg-gradient-to-b group-hover:from-primary-sky group-hover:to-primary-indigo group-hover:mix-blend-multiply group-hover:opacity-100",
              "transition-all duration-300"
            )} />
            <div className="relative p-8 z-10 space-y-6 overflow-hidden">
              <h3 className="text-white w-min font-league-gothic text-7xl leading-[0.9] uppercase">{item.title}</h3>
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


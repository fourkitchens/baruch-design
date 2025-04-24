import heroImage from "@/assets/images/zicklin/photo-1570560259107-4391b020e73d.avif";
import Image from "next/image";
import clsx from "clsx";

export default function Hero() {
  return (
    <div className={clsx(
      "relative isolate overflow-hidden bg-secondary-chartreuse", 
      "py-24 sm:pt-32 sm:pb-64 min-h-[calc(100vh-218.64px)]",
      "flex flex-col items-center justify-center"
    )}>
      <Image src={heroImage} alt="Baruch Students" className="absolute inset-0 -z-10 size-full object-cover opacity-50 mix-blend-multiply" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <h1 className="text-3xl font-bold text-shadow-lg/30 mb-2">Zicklin School of Business at Baruch College</h1>
        <h2 className="text-[190px] text-balance leading-[150px] font-semibold uppercase font-field-gothic text-shadow-lg/40">New York Smart.<br/>World-Class Ready.&reg;</h2>
        <p className="text-shadow-lg/30 text-2xl max-w-3xl font-medium mt-16">
          Zicklin is New York City’s premier public business school, where ambition meets opportunity. With world-class programs, a dynamic urban location, and a powerful alumni network, we prepare students to lead with impact in today’s competitive business landscape.
        </p>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary-chartreuse via-secondary-lemonade to-secondary-tangerine mix-blend-multiply saturate-50
" />
    </div>
  );
}
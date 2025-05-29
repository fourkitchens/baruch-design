"use client";

import clsx from "clsx";
import Button from "@/components/button";
import bgImage from '@/assets/images/zicklin/Page-Top-big-image5-3000x2000px.jpg'
import Image from "next/image";

export default function Hero() {

  return (
    <div className={clsx(
      "relative isolate overflow-hidden bg-neutral-slate", 
      "py-24 sm:pt-16 sm:pb-32 h-[600px]",
      "flex flex-col items-center justify-center"
    )}>
      <Image src={bgImage} alt="Zicklin School of Business at Baruch College" className="absolute inset-0 -z-10 size-full object-cover" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
        <h1>
          <span className="text-[400px] leading-[300px] font-bold font-field-gothic uppercase text-shadow-lg/30 mb-2 text-balance block">Zicklin</span>
          <span className="text-2xl font-bold font-condensed uppercase text-shadow-lg/30 mb-2 text-balance block text-secondary-lemonade tracking-widest">School of Business</span>
        </h1>
        {/* <h1 className="text-8xl font-bold font-sans-xcondensed uppercase text-shadow-lg/30 mb-2 text-balance">
          <span className="text-secondary-lemonade text-9xl block">Zicklin</span> School of Business
        </h1>
        <h2 className="mt-6 text-3xl font-bold font-sans-condensed uppercase text-shadow-lg/30">New York Smart.<br/>World-Class Ready.&reg;</h2> */}
      </div>
      <div className="absolute inset-0 -z-10 bg-neutral-slate mix-blend-multiply saturate-50" />
    </div>
  );
}
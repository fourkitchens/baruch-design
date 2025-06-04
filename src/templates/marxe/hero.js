"use client";

import clsx from "clsx";
import bgImage from '@/assets/images/marxe/IMG_5176.jpg'
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
          <span className="text-[400px] leading-[300px] font-bold font-field-gothic uppercase text-shadow-lg/30 mb-2 text-balance block">Marxe</span>
          <span className="text-2xl font-bold font-condensed uppercase text-shadow-lg/30 mb-2 text-balance block text-secondary-chartreuse tracking-widest max-w-2xl mx-auto">School of Public and International Affairs</span>
        </h1>
      </div>
      <div className="absolute inset-0 -z-10 bg-neutral-slate mix-blend-multiply saturate-50" />
    </div>
  );
}
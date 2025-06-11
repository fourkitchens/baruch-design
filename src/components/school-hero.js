"use client";

import clsx from "clsx";
import Image from "next/image";

export default function SchoolHero({ 
  schoolName, 
  schoolDescription, 
  backgroundImage, 
  accentColor = "text-secondary-chartreuse" 
}) {
  return (
    <div className={clsx(
      "relative isolate overflow-hidden bg-neutral-slate", 
      "py-24 sm:pt-16 sm:pb-32 h-[600px]",
      "flex flex-col items-center justify-center"
    )}>
      <Image 
        src={backgroundImage} 
        alt={`${schoolName} School at Baruch College`} 
        className="absolute inset-0 -z-10 size-full object-cover" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
        <h1>
          <span className="text-[400px] leading-[300px] font-bold font-field-gothic uppercase text-shadow-lg/30 mb-2 text-balance block">{schoolName}</span>
          <span className={clsx(
            "text-2xl font-bold font-condensed uppercase text-shadow-lg/30 mb-2 text-balance block tracking-widest max-w-2xl mx-auto",
            accentColor
          )}>
            {schoolDescription}
          </span>
        </h1>
      </div>
      <div className="absolute inset-0 -z-10 bg-neutral-slate mix-blend-multiply saturate-50" />
    </div>
  );
} 
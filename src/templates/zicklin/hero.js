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
        <h1 className="text-8xl font-bold font-sans-xcondensed uppercase text-shadow-lg/30 mb-2 text-balance">
          <span className="text-secondary-lemonade text-9xl block">Zicklin</span> School of Business
        </h1>
        <h2 className="mt-6 text-3xl font-bold font-sans-condensed uppercase text-shadow-lg/30">New York Smart.<br/>World-Class Ready.&reg;</h2>
        {/* <h1 className="text-3xl font-bold text-shadow-lg/30 mb-2">Zicklin School of Business at Baruch College</h1>
        <h2 className="text-[190px] text-balance leading-[150px] font-semibold uppercase font-field-gothic text-shadow-lg/40">New York Smart.<br/>World-Class Ready.&reg;</h2>
        <div className="flex justify-start gap-4 py-2 mt-6">
          <Button href="/apply" type="tangerine">Apply Now</Button>
          <Button href="/apply" type="tangerine">Plan a Visit</Button>
        </div> */}
      </div>
      <div className="absolute inset-0 -z-10 bg-neutral-slate mix-blend-multiply saturate-50" />
    </div>
  );
}
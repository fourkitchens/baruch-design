"use client";

import clsx from "clsx";
import Video from '@/components/video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/pro-regular-svg-icons'
import { useRef, useState, useEffect } from 'react';
import Button from "@/components/button";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Set initial playing state based on video element
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={clsx(
      "relative isolate overflow-hidden bg-neutral-slate", 
      "py-24 sm:pt-16 sm:pb-32 min-h-[calc(100vh-(246.57px))]",
      "flex flex-col items-center justify-center"
    )}>
      <Video 
        ref={videoRef}
        src="/videos/Baruch-Zicklin-Homepage.mp4"
        className="absolute inset-0 -z-10 size-full object-cover"
        autoPlay
        muted
        loop
      />
      
      <button 
        onClick={togglePlayPause}
        className="absolute bottom-0 right-1 -translate-x-1/2 -translate-y-1/2 z-40 hover:scale-110 transition-all"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <FontAwesomeIcon 
          icon={isPlaying ? faCirclePlay : faCirclePause} 
          className="!size-12 text-white" 
        />
      </button>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <h1 className="text-3xl font-bold text-shadow-lg/30 mb-2">Zicklin School of Business at Baruch College</h1>
        <h2 className="text-[190px] text-balance leading-[150px] font-semibold uppercase font-field-gothic text-shadow-lg/40">New York Smart.<br/>World-Class Ready.&reg;</h2>
        <div className="flex justify-start gap-4 py-2 mt-6">
          <Button href="/apply" type="tangerine">Apply Now</Button>
          <Button href="/apply" type="tangerine">Plan a Visit</Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-neutral-slate mix-blend-multiply saturate-50" />
    </div>
  );
}
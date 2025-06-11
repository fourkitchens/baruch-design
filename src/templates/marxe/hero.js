"use client";

import SchoolHero from '@/components/school-hero';
import marxeBg from '@/assets/images/marxe/IMG_5176 copy.jpg';

export default function Hero() {
  return (
    <SchoolHero
      schoolName="Marxe"
      schoolDescription="School of Public and International Affairs"
      backgroundImage={marxeBg}
      accentColor="text-secondary-chartreuse"
    />
  );
}
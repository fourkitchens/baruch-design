"use client";

import SchoolHero from '@/components/school-hero';
import zicklinBg from '@/assets/images/zicklin/Page-Top-big-image5-3000x2000px.jpg';

export default function Hero() {
  return (
    <SchoolHero
      schoolName="Zicklin"
      schoolDescription="School of Business"
      backgroundImage={zicklinBg}
      accentColor="text-secondary-lemonade"
    />
  );
}
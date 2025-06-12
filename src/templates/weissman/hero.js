"use client";

import SchoolHero from '@/components/school-hero';
import weissmanBg from '@/assets/images/weissman/image002.jpeg';

export default function Hero() {
  return (
    <SchoolHero
      schoolName="Weissman"
      schoolDescription="School of Arts and Sciences"
      backgroundImage={weissmanBg}
      accentColor="text-secondary-thistle"
    />
  );
}
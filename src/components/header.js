import PrimaryNav from "@/components/primaryNav";
import PrimaryNavMobile from "@/components/primaryNavMobile";
import UtilityNav from "@/components/utilityNav";
import Search from '@/components/search';
import Logo from '@/components/logo';
import gritImage from '@/assets/images/gritty-texture-sand-on-transparent-background-monochrome-noise-halftone-grit-pattern-isolated-illustration-vector.jpg'; 
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="bg-gradient-to-r from-primary-indigo via-primary-cuny-blue to-primary-cuny-blue">
        <div className="relative z-50">
          <UtilityNav className="hidden lg:block" />
          
          <div className="flex flex-row items-center lg:items-end justify-start max-width-wrapper py-3 md:py-7">
            <Logo />
            
            <div className="ms-auto flex-row items-center gap-8 hidden lg:flex">
              <div className="flex justify-end gap-4 py-2">
                <a href="/apply" className="bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo px-6 py-2 font-bold rounded-sm transition-all">
                  Apply Now
                </a>
                <a href="/visit" className="bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white px-6 py-2 font-bold rounded-sm transition-colors">
                  Plan a Visit
                </a>
              </div>
            </div>

            <PrimaryNavMobile className="ms-auto" />
          </div>
          
          <div className="border-t border-neutral-dove/20 hidden lg:block">
            <div className="max-width-wrapper py-1 flex flex-row items-center justify-between">
              <PrimaryNav />
              <Search />
            </div>
          </div>
        </div>

        <Image src={gritImage} alt="grit" className="absolute top-0 left-0 w-full h-full object-cover mix-blend-multiply opacity-20" />
      </div>
    </header>
  );
}

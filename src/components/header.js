import PrimaryNav from "@/components/primaryNav";
import PrimaryNavMobile from "@/components/primaryNavMobile";
import UtilityNav from "@/components/utilityNav";
import Search from '@/components/search';
import Logo from '@/components/logo';
import gritImage from '@/assets/images/gritty-texture-sand-on-transparent-background-monochrome-noise-halftone-grit-pattern-isolated-illustration-vector.jpg'; 
import Image from 'next/image';
import Button from '@/components/button';

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
                <Button href="/visit" >
                  Apply Now
                </Button>
                <Button href="/visit" type="ghost" >
                  Plan a Visit
                </Button>
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

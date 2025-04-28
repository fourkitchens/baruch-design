import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import PrimaryNav from "@/components/primaryNav";
import PrimaryNavMobile from "@/components/primaryNavMobile";
import AccelerateAmbition from "@/assets/AccelerateAmbition";
import SocialNav from "@/components/socialNav";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-indigo via-primary-cuny-blue to-primary-cuny-blue relative z-50">

      <div className="flex flex-row items-center lg:items-end justify-start py-7 lg:pt-10 lg:pb-8 max-width-wrapper">
        <div className="space-y-2">
          <BaruchLogoHorizontal className="w-[200px] h-auto lg:w-[300px] text-white" />
          <AccelerateAmbition className="text-secondary-chartreuse lg:w-[250px] h-auto" />
        </div>
        
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
          <div className="flex flex-row items-center gap-4">
            <SocialNav className="" location="header" />
          </div>
        </div>
      </div>
    </header>
  );
}

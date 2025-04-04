import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import PrimaryNav from "@/components/primaryNav";
import CunyLogoLong from "@/assets/logos/CunyLogoLong";
import Search from "@/components/search";
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-indigo via-primary-cuny-blue to-secondary-grape">

      <div className="flex flex-row items-end justify-start pt-10 pb-8 max-width-wrapper">
        <div>
          <BaruchLogoHorizontal className="w-[300px] text-white" />
          <p className="text-primary-sky font-field-gothic uppercase font-bold text-6xl tracking-wide leading-[50px]">Accelerate your ambition.</p>
        </div>
        
        <div className="ms-auto flex flex-row items-center gap-8">
          <div className="flex justify-end gap-4 py-2">
            <a href="/apply" className="bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo px-6 py-2 font-bold rounded-sm transition-all">
              Apply Now
            </a>
            <a href="/visit" className="bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white px-6 py-2 font-bold rounded-sm transition-colors">
              Plan a Visit
            </a>
          </div>
          <CunyLogoLong className="w-[100px] h-auto text-white ms-auto" />
        </div>
      </div>
      
      <div className="border-t border-neutral-dove/20">
        <div className="max-width-wrapper py-1 flex flex-row items-center justify-between">
          <PrimaryNav />
          <Search />
        </div>
      </div>
    </header>
  );
}

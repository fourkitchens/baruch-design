import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import PrimaryNav from "@/components/primaryNav";
import UtilityNav from "@/components/utilityNav";
import CunyLogoLong from "@/assets/logos/CunyLogoLong";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-indigo via-primary-cuny-blue to-secondary-grape">
        <UtilityNav />

        <div className="flex flex-row items-end justify-start py-8 max-width-wrapper">
          <div>
            <BaruchLogoHorizontal className="w-[300px] text-white" />
            <p className="text-primary-sky font-field-gothic uppercase font-bold text-8xl tracking-wide leading-[70px]">Accelerate your ambition.</p>
          </div>
          <CunyLogoLong className="w-[150px] h-auto text-white ms-auto" />
        </div>
        
        <div className="border-t border-neutral-dove/20">
          <div className="max-width-wrapper py-1">
            <PrimaryNav />
          </div>
        </div>
    </header>
  );
}

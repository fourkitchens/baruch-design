import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import PrimaryNav from "@/components/primaryNav";
import UtilityNav from "@/components/utilityNav";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-indigo via-primary-cuny-blue to-secondary-grape">
        <UtilityNav />

        <div className="flex flex-col items-start justify-start py-12 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <BaruchLogoHorizontal className="w-[300px] text-white" />
          <p className="text-primary-sky font-field-gothic uppercase font-bold text-8xl tracking-wide leading-[70px]">Accelerate your ambition.</p>
        </div>
        
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 pb-2">
          <PrimaryNav />
        </div>
    </header>
  );
}

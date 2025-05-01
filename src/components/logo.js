import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import AccelerateAmbition from "@/assets/AccelerateAmbition";
import BaruchLogo from "@/assets/logos/BaruchLogo";

export default function Logo({tagline=false}) {
  return (
    <>
      {tagline ? (
        <div className="space-y-2">
          <BaruchLogoHorizontal className="w-[200px] h-auto lg:w-[300px] text-white" />
          <AccelerateAmbition className="text-secondary-chartreuse lg:w-[250px] h-auto" />
        </div>
        ) : (
          <BaruchLogo className="w-[200px] h-auto lg:w-[200px] text-white" />
      )}
    </>
  );
}
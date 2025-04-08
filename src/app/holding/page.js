import clsx from "clsx";
import CenterEcho from "@/sections/centerEcho";
import UnderEcho from "@/sections/underEcho";
import ImageSide from "@/sections/imageSide";
import Bento from "@/sections/bento";
import Stats2 from "@/sections/stats2";
import Stats3 from "@/sections/stats3";
import News from "@/sections/news";
import Marquee from "@/sections/marquee";
import BaruchLogo from "@/assets/logos/BaruchLogo";
import Link from "next/link";
import Program from "@/sections/program";
import Slider from "@/sections/statsSlider";
export default function Home() {

  return (
    <div>
      <div className="flex flex-row gap-8 md:gap-32 justify-center items-center min-h-screen py-32">
        <div className="flex flex-col gap-8 md:gap-32 md:flex-row">
          <div>
            <BaruchLogo className="w-[600px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

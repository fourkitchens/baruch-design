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
      <div className="flex flex-col gap-8 justify-center items-center min-h-screen">
        <BaruchLogo className="w-3/4 min-h-[200px]" />
        <p className="text-lg flex flex-row gap-4">
          <Link href="/" className="hover:underline rounded-full px-4 py-2 bg-white/10 ring-1 ring-white/30">Round 2</Link>
          <Link href="/round-1" className="hover:underline rounded-full px-4 py-2 ">Round 1</Link>
        </p>
      </div>
      <CenterEcho/>
      <UnderEcho/>
      <ImageSide/>
      <Bento/>
      <Stats3/>
      <Stats2/>
      <Slider/>
      <Program/>
      <News/>
      <Marquee/>
    </div>
  );
}

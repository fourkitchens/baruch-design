import clsx from "clsx";
import CenterEcho from "@/sections/centerEcho";
import UnderEcho from "@/sections/underEcho";
import ImageSide from "@/sections/imageSide";
import Bento from "@/sections/bento";
import Stats from "@/sections/stats";
import News from "@/sections/news";
import Marquee from "@/sections/marquee";
import BaruchLogo from "@/assets/logos/BaruchLogo";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-primary-indigo text-primary-white">
      <div className="flex flex-col gap-8 justify-center items-center min-h-screen">
        <BaruchLogo className="w-3/4 min-h-[200px]" />
        <p className="text-lg flex flex-row gap-4">
          <Link href="/style-tiles/round-2" className="hover:underline rounded-full px-4 py-2 ">Round 2</Link>
          <Link href="/style-tiles/round-1" className="hover:underline rounded-full px-4 py-2 bg-white/10 ring-1 ring-white/30">Round 1</Link>
        </p>
      </div>
      <CenterEcho/>
      <UnderEcho/>
      <ImageSide/>
      <Bento/>
      <Stats/>
      <News/>
      <Marquee/>
    </div>
  );
}

import clsx from "clsx";
import CenterEcho from "@/sections/centerEcho";
import UnderEcho from "@/sections/underEcho";
import ImageSide from "@/sections/imageSide";
import Bento from "@/sections/bento";
import Stats from "@/sections/stats";
import News from "@/sections/news";
import Marquee from "@/sections/marquee";
import BaruchLogo from "@/assets/logos/BaruchLogo";

export default function Home() {

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <BaruchLogo className="w-3/4 min-h-[200px]" />
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

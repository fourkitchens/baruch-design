import clsx from "clsx";
import CenterEcho from "@/sections/centerEcho";
import UnderEcho from "@/sections/underEcho";
import ImageSide from "@/sections/imageSide";
import Bento from "@/sections/bento";
import Stats from "@/sections/stats";
import News from "@/sections/news";
export default function Home() {
  const echoes = 6;


  return (
    <div>
      <CenterEcho/>
      <UnderEcho/>
      <ImageSide/>
      <Bento/>
      <Stats/>
      <News/>
    </div>
  );
}

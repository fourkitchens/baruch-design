import BaruchLogo from "@/assets/logos/BaruchLogo";
import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";

import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <BaruchLogoHorizontal className="w-[200px] h-auto md:w-[300px] text-white lg:hidden" />
        <BaruchLogo className="w-[200px] h-auto lg:w-[200px] text-white hidden lg:block" />
      </Link>
    </>
  );
}
import clsx from "clsx";
import BaruchLogo from "@/assets/logos/BaruchLogo";
import Link from "next/link";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Program from "@/sections/program";

export default function Basic() {

  return (
    <div>
      <Header/>
      <Program/>
      <Banner/>
    </div>
  );
}

import BaruchLogo from "@/assets/logos/BaruchLogo";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link href="/">
        <BaruchLogo className="w-[200px] h-auto lg:w-[200px] text-white" />
      </Link>
    </>
  );
}
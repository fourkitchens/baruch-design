import BaruchLogo from "@/assets/logos/BaruchLogo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-primary-indigo text-primary-white">
      <div className="flex flex-row gap-8 md:gap-32 justify-center items-center min-h-screen py-32">
        <div className="flex flex-col gap-8 md:gap-32 md:flex-row">
          <div>
            <BaruchLogo className="w-[260px] h-auto" />
            <h2 className="text-2xl font-bold font-field-gothic text-[220px] leading-[170px] uppercase text-secondary-chartreuse">Designs</h2>
            <p className="text-sm text-white/80 mt-6">
              <a href="/storybook" className="link link-indigo-bg hover:text-white">Storybook for Developers</a>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Landing pages</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/home" className="text-white/90 link link-indigo-bg hover:text-white">Home</Link></li>
              <li><Link href="/marxe" className="text-white/90 link link-indigo-bg hover:text-white">Marxe</Link></li>
              <li><Link href="/weissman" className="text-white/90 link link-indigo-bg hover:text-white">Weissman</Link></li>
              <li><Link href="/zicklin" className="text-white/90 link link-indigo-bg hover:text-white">Zicklin</Link></li>
            </ul>

            <h2 className="text-2xl font-bold mt-4">Program pages</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/programs" className="text-white/90 link link-indigo-bg hover:text-white">Program list</Link></li>
              <li><Link href="/program" className="text-white/90 link link-indigo-bg hover:text-white">Program page</Link></li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-4">Profile pages</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/profile" className="text-white/90 link link-indigo-bg hover:text-white">Profile page</Link></li>
              <li><Link href="/profile-list" className="text-white/90 link link-indigo-bg hover:text-white">Profile list</Link></li>
              <li><Link href="/profile-list-results" className="text-white/90 link link-indigo-bg hover:text-white">Profile list results</Link></li>
            </ul>

            <h2 className="text-2xl font-bold mt-4">Academic pages</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/academic" className="text-white/90 link link-indigo-bg hover:text-white">Academic page</Link></li>
            </ul>

          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Basic page</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/basic" className="text-white/90 link link-indigo-bg hover:text-white">Basic page</Link></li>
              <li><Link href="/basic/cabinet" className="text-white/90 link link-indigo-bg hover:text-white">Cabinet</Link></li>
              <li><Link href="/basic/provost" className="text-white/90 link link-indigo-bg hover:text-white">Accreditation</Link></li>
              <li><Link href="/basic/everything" className="text-white/90 link link-indigo-bg hover:text-white">Everything</Link></li>
              <li><Link href="/basic/current-students" className="text-white/90 link link-indigo-bg hover:text-white">Current students</Link></li>
              <li><Link href="/basic/current-students-2" className="text-white/90 link link-indigo-bg hover:text-white">Current students 2</Link></li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-4">News pages</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/basic/news-list" className="text-white/90 link link-indigo-bg hover:text-white">News list</Link></li>
              <li><Link href="/basic" className="text-white/90 link link-indigo-bg hover:text-white">News article</Link></li>
              <li><Link href="/basic/news/text-only" className="text-white/90 link link-indigo-bg hover:text-white">News article (text only)</Link></li>
            </ul>
            <h2 className="text-2xl font-bold mt-4">Style Tiles</h2>
            <ul className="text-lg flex flex-col gap-4 leading-none">
              <li><Link href="/style-tiles/round-2" className="text-white/90 link link-indigo-bg hover:text-white">Round 2</Link></li>
              <li><Link href="/style-tiles/round-1" className="text-white/90 link link-indigo-bg hover:text-white">Round 1</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

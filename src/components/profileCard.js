import Image from "next/image"
import BaruchLogo from "@/assets/logos/BaruchLogo";

export default function ProfileCard({ profile }) {
  return (
    <div className="flex flex-col not-prose">
      {profile.image ? (
        <Image src={profile.image} alt={profile.name} className="object-cover rounded-lg aspect-square mb-4" />
      ) : (
        <div className="bg-neutral-slate rounded-lg aspect-square mb-4 flex items-center justify-center">
          <BaruchLogo className="w-[200px] h-auto lg:w-[200px] text-white/50" />
        </div>
      )}
      <div className="leading-tight space-y-2">
        <h3 className="text-2xl font-bold text-balance">
          <a href="#" className="link leading-snug font-semibold text-heading">{profile.name}</a>
        </h3>
        <p className="font-semibold text-lg">{profile.title}</p>
        <p className="text-lg leading-tight">{profile.school}</p>
        <p className="">{profile.department}</p>
      </div>
    </div>
  )
}

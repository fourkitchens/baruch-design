import Image from "next/image";

export default function StatsPhotoBg({image, stats}) {
  return (
    <div className="relative isolate overflow-hidden bg-primary-indigo py-24 sm:py-32">
      <Image src={image} alt="Baruch Students" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stats && stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-[140px] text-balance leading-[110px] font-semibold uppercase font-field-gothic ">{stat.header}</dt>
              <dd 
                className="text-2xl text-balance block text-white/80 font-semibold"
              >{stat.subhead}</dd>
              {/* <dd 
                className="text-[90px] text-balance leading-[90px] block text-white/70 font-semibold uppercase font-field-gothic"
              >{stat.subhead}</dd> */}
              <dd className="text-base/6">{stat.attribution}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-cuny-blue via-secondary-grape to-primary-navy mix-blend-multiply saturate-50
" />
    </div>
  )
}

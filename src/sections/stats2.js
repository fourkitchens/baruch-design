import Image from "next/image";
import imageSrc from "@/assets/images/Baruch-students_NVC.jpg";

const stats = [
  { id: 1, header: '#1 Public College <span>in New York State</span>', subhead: 'U.S. News & World Report (Best Colleges-North Ranking)' },
  { id: 3, header: 'Top 25 <span>Public College in the U.S.</span>', subhead: 'Forbes Magazine' },
  { id: 2, header: '#1 in the Nation', subhead: 'The Wall Street Journal (U.S. Colleges Offering the Best Value)' },
]

export default function Stats2() {
  return (
    <div className="relative isolate overflow-hidden bg-primary-indigo py-24 sm:py-32">
      <Image src={imageSrc} alt="Baruch Students" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-base/6">{stat.subhead}</dt>
              <dd 
                className="order-first text-[140px] text-balance leading-[110px] font-semibold uppercase font-field-gothic [&_span]:text-[90px] [&_span]:leading-[90px] [&_span]:block [&_span]:text-white/70"
                dangerouslySetInnerHTML={{ __html: stat.header }}
              />
            </div>
          ))}
        </dl>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-cuny-blue via-secondary-grape to-primary-navy mix-blend-multiply saturate-50
" />
    </div>
  )
}

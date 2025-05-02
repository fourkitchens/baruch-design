export default function Stats({stats, bg="bg-primary-indigo"}) {
  return (
    <div className={`relative isolate overflow-hidden ${bg} py-16`}>      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stats && stats.map((stat, index) => (
            <div key={stat.id} className={`flex flex-col gap-y-3 border-l border-white/10 pl-6 ${index < 3 ? '-ml-4' : '-mr-4'}`}>
              <dt className="font-sans-condensed text-balance font-semibold uppercase text-8xl">
                {stat.header.includes('#') ? (<div className="flex items-center gap-1 leading-none"><span className="text-6xl">#</span>{stat.header.substring(1)}</div>) : stat.header}
              </dt>
              <dd 
                className="text-xl text-balance block text-white/80 font-semibold"
              >{stat.subhead}</dd>
              <dd className="text-base/6">{stat.attribution}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const stats = [
  { id: 1, name: 'Public College in New York State, U.S. News & World Report (Best Colleges-North Ranking)', value: '#1' },
  { id: 2, name: 'in the Nation, The Wall Street Journal (U.S. Colleges Offering the Best Value)', value: '#1' },
  { id: 3, name: 'Public College in the U.S. Forbes Magazine', value: 'Top 25' },
]

export default function Stats() {
  return (
    <div className="relative isolate overflow-hidden bg-primary-indigo py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1266/975 w-[79.125rem] bg-linear-to-tr from-[#ff4694] to-[rgba(81, 12, 118, 1)] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base/8 font-semibold text-indigo-400">Our track record</h2>
          <p className="mt-2 text-4xl font-field-gothic uppercase text-[200px] leading-[150px] font-semibold  text-pretty text-white">
            Explore, Learn, Succeed at Baruch
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-base/6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

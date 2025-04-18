
"use client";

import { Carousel } from "flowbite-react";

const stats = [
  { id: 1, header: '#1 Public College <span>in New York State</span>', subhead: 'U.S. News & World Report (Best Colleges-North Ranking)' },
  { id: 3, header: 'Top 25 <span>Public College in the U.S.</span>', subhead: 'Forbes Magazine' },
  { id: 2, header: '#1 in the Nation', subhead: 'The Wall Street Journal (U.S. Colleges Offering the Best Value)' },
]

export function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px] relative">
      <div className="absolute inset-0 bg-secondary-chartreuse" />
      <Carousel>
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col gap-y-3 items-center justify-center text-primary-cuny-blue">
            <dd 
              className="order-first text-[180px] text-balance leading-[110px] font-semibold uppercase font-field-gothic [&_span]:text-[110px] [&_span]:leading-[72px] [&_span]:block [&_span]:mt-4"
              dangerouslySetInnerHTML={{ __html: stat.header }}
            />
            <dt className="text-lg/6 mt-2 text-neutral-charcoal font-semibold">{stat.subhead}</dt>
          </div>
        ))}
      </Carousel>
      
    </div>
  );
}

export default Slider;
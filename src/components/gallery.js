"use client";

import { Carousel } from "flowbite-react";
import image1 from '@/assets/images/news1.gif';
import image2 from '@/assets/images/news2.gif';
import image3 from '@/assets/images/UNA-USA-Fellow_.gif';
import Image from 'next/image';

const stats = [
  { id: 1, header: '#1 Public College <span>in New York State</span>', subhead: 'U.S. News & World Report (Best Colleges-North Ranking)' },
  { id: 3, header: 'Top 25 <span>Public College in the U.S.</span>', subhead: 'Forbes Magazine' },
  { id: 2, header: '#1 in the Nation', subhead: 'The Wall Street Journal (U.S. Colleges Offering the Best Value)' },
]

export function Gallery() {
  return (
    <div className="w-full aspect-video not-prose">
      <Carousel pauseOnHover slide={false} className="">
        <Image src={image1} alt="Image 1" className="mt-0 bg-cover" />
        <Image src={image2} alt="Image 2" className="mt-0 bg-cover" />
        <Image src={image3} alt="Image 3" className="mt-0 bg-cover" />
      </Carousel>
    </div>
  );
}

export default Gallery;
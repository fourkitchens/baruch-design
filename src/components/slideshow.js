"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import image1 from '@/assets/images/marketplace.png';
import image2 from '@/assets/images/2017CUNYACSeniors.webp';
import image3 from '@/assets/images/UNA-USA-Fellow_.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/pro-solid-svg-icons'
import clsx from 'clsx';

export function Gallery() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative bg-neutral-pearl-dark">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        >
        <SwiperSlide>
          <Image src={image1} alt="Image 1" className="!my-0 bg-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="Image 2" className="!my-0 bg-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="Image 3" className="!my-0 bg-cover" />
        </SwiperSlide>
      </Swiper>

      <nav className={clsx("absolute inset-0 z-10 flex justify-between items-center px-4 w-full", isBeginning && "justify-end", isEnd && "justify-start")}>
      {!isBeginning && (<button 
          onClick={() => swiperRef.current?.slidePrev()} 
          className="bg-white/60 border border-text-body rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-white/90 transition-colors duration-300"
        >
          <span className="sr-only">Previous</span>
          <FontAwesomeIcon icon={faArrowLeft} className="text-body"/>
        </button>
      )}
      {!isEnd && (<button 
          onClick={() => swiperRef.current?.slideNext()} 
          className="bg-white/60 border border-text-body rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-white/90 transition-colors duration-300"
        >
          <span className="sr-only">Next</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-body"/>
        </button>
      )}
      </nav>
    </div>
  );
}

export default Gallery;
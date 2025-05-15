'use client'

import NavSectionMobile from './navSectionMobile';
import mission from "@/assets/images/gettyimages-2094337676-2048x2048.jpg"
import knowUs from "@/assets/images/UNA-USA-Fellow_.gif"
import programsImage from "@/assets/images/admissions-trim.jpg"
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCompass } from '@fortawesome/pro-solid-svg-icons'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const sections = [
  {
    header: "Shape Your Future Here",
    image: programsImage,
    items: [
      {
        title: "Programs and Areas of Study",
        url: "/programs"
      },
      {
        title: "Departments",
        url: "#"
      },
      {
        title: "Undergraduate Degrees and Programs",
        url: "#"
      },
      {
        title: "Graduate and Executive Degrees and Programs",
        url: "#"
      },
      {
        title: "Baruch Honors",
        url: "#"
      },
        
    ]
  },
  {
    header: "Helping You Succeed",
    image: mission,
    items: [
      {
        title: "Academic Support for Students",
        url: "#"
      },
      {
        title: "Student Academic Consulting Center (SACC)",
        url: "#"
      },
      {
        title: "Writing Center",
        url: "#"
      },
      {
        title: "Computing Services",
        url: "#"
      },
    ]
  },
  {
    header: "Research and Innovation",
    image: knowUs,
    items: [
      {
        title: "Research",
        url: "#"
      },
      {
        title: "Office of Research Compliance and Outreach (ORCO)",
        url: "#"
      },
      {
        title: "Office of Sponsored Programs and Research (SPAR)",
        url: "#"
      },
    ]
  }
];

export default function PrimaryNavAcademics() {
  return (
    <div className="relative px-6 ">
      <Swiper
        pagination={true} 
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1.25,
          },
          590: {
            slidesPerView: 1.75,
          },
          640: {
            slidesPerView: 2.5,
          }
        }}
        spaceBetween={8}
        className="mySwiper flex items-stretch !overflow-visible"
      >
        {sections.map((section, index) => (
          <SwiperSlide key={section.header} className="!h-auto !flex">
            <NavSectionMobile 
              key={section.header}
              header={section.header}
              image={section.image}
              items={section.items}
              className="h-auto"
              maxItems={50}
              />
          </SwiperSlide>
        ))}
        <SwiperSlide className="!h-auto !flex">
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-pearl-dark ring-1 ring-neutral-dove rounded-sm p-6 pe-4 flex-1">
              <h3 className="text-base/6 leading-none text-body mb-4 uppercase font-bold flex items-center">
                <FontAwesomeIcon icon={faBuildingColumns} className="mr-2 size-4 relative -top-[2px] opacity-60" />
                Schools
              </h3>
              <ul className="text-lg">
                <li className="py-2 leading-tight">
                  <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-dark-bg")}>
                    Marxe School of International Affairs
                  </a>
                </li>
                <li className="py-2 leading-tight">
                  <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-dark-bg")}>
                    Weissman School of Arts and Sciences
                  </a>
                </li>
                <li className="py-2 leading-tight">
                  <a href="/zicklin" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-dark-bg")}>
                    Zicklin School of Business
                  </a>
                </li>
                <li className="py-2 leading-tight">
                  <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-dark-bg")}>
                    Baruch Online
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-pearl-dark ring-1 ring-neutral-dove rounded-sm p-6 pe-4 flex-1">
              <h3 className="text-base/6 leading-none text-body mb-4 uppercase font-bold flex items-center">
                <FontAwesomeIcon icon={faCompass} className="mr-2 size-4 relative -top-[2px] opacity-60" />
                Explore Your Options
              </h3>
              <ul className="text-lg">
                <li className="py-2 leading-tight">
                  <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-dark-bg")}>
                    Programs
                  </a>
                </li>
                {/* <li className="py-2 leading-tight">
                  <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-bg")}>
                    Courses
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

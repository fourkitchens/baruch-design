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
        slidesPerView={1.25}
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
      </Swiper>
    </div>
  )
}

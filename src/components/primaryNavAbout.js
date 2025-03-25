import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";
import NavSection from './NavSection';
import wu from "@/assets/images/wu-cropped.png"

const sections = [
  {
    header: "Our Leadership",
    image: wu,
    items: [
      {
        title: "President S. David Wu, PhD",
        url: "#"
      },
      {
        title: "Office of the Provost",
        url: "#"
      },
      {
        title: "President's Cabinet",
        url: "#"
      }
    ]
  },
  {
    header: "Mission",
    items: [
      {
        title: "Mission Statement",
        url: "#"
      },
      {
        title: "Accreditation",
        url: "#"
      },
      {
        title: "Baruch at a Glance",
        url: "#"
      },
      {
        title: "Economic Mobility at a Glance",
        url: "#"
      },
      {
        title: "Diversity at Baruch",
        url: "#"
      },
      {
        title: "Legal Affairs and Labor Relations",
        url: "#"
      },
      {
        title: "Fact Sheet",
        url: "#"
      },
      {
        title: "Institutional Research",
        url: "#"
      },
      {
        title: "Honors and Rankings",
        url: "#"
      },
      {
        title: "Baruch Strategic Planning",
        url: "#"
      },
      {
        title: "Video Library",
        url: "#"
      }
    ]
  },
  {
    header: "Our Campus",
    items: [
      {
        title: "Welcome to Baruch",
        url: "#"
      },
      {
        title: "Map and Directions",
        url: "#"
      },
      {
        title: "Virtual Campus Tour",
        url: "#"
      },
      {
        title: "Archives and Special Collections",
        url: "#"
      },
      {
        title: "Conference Services",
        url: "#"
      },
      {
        title: "Hiring Baruch Students and Alumni",
        url: "#"
      },
      {
        title: "The Clivner=Field Plaza",
        url: "#"
      },
      {
        title: "Athletics and Recreation Center",
        url: "#"
      },
      {
        title: "Renovating the Field Building",
        url: "#"
      },
      {
        title: "Baruch Performing Arts Center",
        url: "#"
      },
      {
        title: "Sidney Mishkin Gallery",
        url: "#"
      },
      {
        title: "Public Safety and Security",
        url: "#"
      },
      {
        title: "Emergency Information/Closings",
        url: "#"
      }
    ]
  },
  {
    header: "Get to Know Us",
    items: [
      {
        title: "Latest News",
        url: "#"
      },
      {
        title: "Press Release Archive",
        url: "#"
      },
      {
        title: "Baruch in the Media",
        url: "#"
      },
      {
        title: "Alumni Magazine",
        url: "#"
      },
      {
        title: "Digital Media Library",
        url: "#"
      },
      {
        title: "Social Media",
        url: "#"
      },
      {
        title: "Baruch Calendar",
        url: "#"
      }
    ]
  }
];

export default function PrimaryNavAbout() {
  return (
    <Popover className="relative isolate z-50 shadow-sm">
      
      <PopoverButton className={clsx("text-xl font-bold text-white/90 hover:text-white",
        "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky",
        "flex items-center gap-x-1",
        "py-2 px-4"
      )}>
        About 
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>
        
      <PopoverPanel
        transition
        className="absolute left-0 top-5 rounded-sm shadow-lg z-10 mt-5 flex w-screen max-w-max bg-white -translate-x-8 px-4 transition data-closed:translate-y-8 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:px-8">
          <div className="grid grid-cols-4 gap-x-6 sm:gap-x-8 divide-x divide-neutral-dove">
          {sections.map((section) => (
            <NavSection 
              key={section.header}
              header={section.header}
              image={section.image}
              items={section.items}
              className="pe-8"
              maxItems={5}
            />
          ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

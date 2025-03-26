import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import PrimaryNavAbout from '@/components/primaryNavAbout';
const mainNavLinks = [
  {
    title: "About",
    url: "#",
    popover: <PrimaryNavAbout />,
    sections: [
      {
        header: "Our Leadership",
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
      }
    ]
  },
  {
    title: "Admissions",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Academics",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Arts",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Athletics",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Students",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Alumni",
    url: "#",
    popover: <PrimaryNavAbout />
  }
];

export default function PrimaryNav() {
  return (
    <PopoverGroup className="flex items-center justify-start gap-2">
      {mainNavLinks.map((item) => (
        <Popover className="relative isolate z-50 shadow-sm">
          <PopoverButton className={clsx("text-xl font-bold text-white/90 hover:text-white",
            "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky",
            "flex items-center gap-x-1",
            "py-2 px-4"
          )}>
            {item.title}
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute left-0 top-5 rounded-sm shadow-lg z-10 mt-5 flex w-screen max-w-max bg-white -translate-x-8 px-4 transition data-closed:translate-y-8 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
          >{item.popover}</PopoverPanel>
        </Popover>
      ))}
    </PopoverGroup>
  );
};
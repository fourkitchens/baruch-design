import programs from "@/data/programs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";
import sampleImage from "@/assets/images/students_2265_hor.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBuildingColumns } from '@fortawesome/pro-solid-svg-icons'
import { ChevronDownIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const breadcrumbData = [
  { name: 'Academics', href: '#', current: false },
]

const ProgramType = () => {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-body ring-1 shadow-xs ring-neutral-pewter/50 ring-inset hover:text-primary-cuny-blue">
          Choose Learning Format
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-neutral-pewter" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-neutral-pewter/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2">On Campus</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2">Online</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2">Hybrid</MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

const Schools = () => {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-body ring-1 shadow-xs ring-neutral-pewter/50 ring-inset hover:text-primary-cuny-blue">
          Choose a School
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-neutral-pewter" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-neutral-pewter/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Marxe School of Public and International Affairs</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Weissman School of Arts and Sciences</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Zicklin School of Business</MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default function ProgramList() {
  return (
    <>
      <Header />
      <LayoutPage wide={true}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>Programs and Areas of Study</PageTitle>
        </div>

        <section className="mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold w-max whitespace-nowrap">Search programs:</h2>
            <input type="text" placeholder="Search programs" className="w-1/3 rounded-md border-none px-4 py-2 ring-1 shadow-xs ring-neutral-pewter/50" />
          </div>

          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Filter programs by:</h2>
            <button className="inline-flex w-min justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-body ring-1 shadow-xs ring-neutral-pewter/50 ring-inset hover:text-primary-cuny-blue">Undergraduate</button>
            <button className="inline-flex w-min justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-body ring-1 shadow-xs ring-neutral-pewter/50 ring-inset hover:text-primary-cuny-blue">Graduate</button>
            <ProgramType/>
            <Schools/>
            <button className="group inline-flex items-center gap-x-2 rounded-md bg-transparent px-3 py-2 font-medium text-body hover:text-primary-cuny-blue">
              <ArrowPathIcon className="size-5 text-neutral-pewter group-hover:text-primary-cuny-blue" />
              Reset filters
            </button>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0 prose lg:prose-lg">
            <p className="lead"><strong>At Baruch College, world-class education meets limitless opportunity.</strong> With top-ranked programs, renowned faculty, and a vibrant, diverse community, Baruch empowers students to grow intellectually, achieve professionally, and lead boldly.</p>
            <p className="text-balance">Choose from over 90 undergraduate majors and minors or explore 60+ graduate and executive programs across our three distinguished schools—Marxe School of Public and International Affairs, Weissman School of Arts and Sciences, and Zicklin School of Business. Whether you're launching your career or advancing it, Baruch offers the flexibility, expertise, and inspiration to shape your future.</p>
          </div>
          <ul role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-20 lg:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
            {programs
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((program) => (
                <li key={program.name} className="flex flex-col">
                  <Image src={sampleImage} alt="Sample Image" className="object-cover rounded-lg aspect-square mb-4 order-0" />
                  <h3 className="text-2xl font-bold text-balance order-2">
                    <a href={program.url} className="link leading-snug font-semibold text-heading">{program.name}</a>
                  </h3>
                  <p className="order-1">
                    {program.undergraduate && (
                      <div className="uppercase inline-flex items-center gap-2 font-semibold text-xs"><FontAwesomeIcon icon={faGraduationCap} className="size-4 text-body/70 relative -top-[1px]" />Undergraduate</div>
                    )}
                    {program.graduate && (
                      <div className="uppercase inline-flex items-center gap-2 font-semibold text-xs"><FontAwesomeIcon icon={faBuildingColumns} className="size-3 text-body/70 relative -top-[1px]" />Graduate</div>
                    )}
                  </p>
                  <p className="order-3 text-xs mt-6">
                    {program.major && (
                      <div className="font-semibold uppercase">Major</div>
                    )}
                    {program.minor && (
                      <div className="font-semibold uppercase">Minor</div>
                    )}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </LayoutPage>
      <Footer />
    </>
  );
}
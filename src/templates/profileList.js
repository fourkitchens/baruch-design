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

const breadcrumbData = []

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

const Departments = () => {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-body ring-1 shadow-xs ring-neutral-pewter/50 ring-inset hover:text-primary-cuny-blue">
          Choose a Department
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-neutral-pewter" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-neutral-pewter/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Accounting</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Business</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Economics</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Finance</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Management</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Marketing</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Operations</MenuItem>
          <MenuItem as="div" className="hover:bg-primary-sky/10 px-4 py-2 leading-tight">Supply Chain</MenuItem>
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
          <PageTitle>Faculty Profiles</PageTitle>
        </div>

        <section className="mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold w-max whitespace-nowrap">Search by name, expertise, or keyword:</h2>
            <input type="text" placeholder="Search" className="w-1/3 rounded-md border-none px-4 py-2 ring-1 shadow-xs ring-neutral-pewter/50" />
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0 prose lg:prose-lg col-span-2">
            <h2>About our faculty</h2>
            <p className="lead">Baruch College's faculty members are talented educators, esteemed researchers, and thought leaders in a variety of disciplines. They are affiliated with Baruch's three schools—Austin W. Marxe School of Public and International Affairs, Weissman School of Arts and Sciences, and Zicklin School of Business. </p>
            <p>Faculty teach, mentor, and provide academic advisement, counseling, and support within the three schools and in the William and Anita Newman Library, Percy Ellis SEEK Program, and College Now. Learn more about our diverse faculty members and their outstanding achievements.</p>
          </div>
        </div>
      </LayoutPage>
      <Footer />
    </>
  );
}
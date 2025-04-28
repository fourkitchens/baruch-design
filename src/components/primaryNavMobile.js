'use client'

import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import AccelerateAmbition from "@/assets/AccelerateAmbition";
import mainNavLinks from '@/data/primaryNav';

export default function PrimaryNavMobile({className}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={`lg:hidden ${className}`}>
      <button
        type="button"
        className="flex items-center justify-center rounded-md p-2.5 text-white"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only hidden">Open menu</span>
        <Bars3Icon className="size-9" aria-hidden="true" />
      </button>
    
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden relative z-50">
        {/* <div className="fixed inset-0 z-10" /> */}

        <DialogPanel className="fixed inset-0 bg-primary-indigo text-white">
          
          <header className="flex flex-row items-center justify-start py-7 max-width-wrapper">
            <div className="space-y-2">
              <BaruchLogoHorizontal className="w-[200px] h-auto lg:w-[300px] text-white" />
              <AccelerateAmbition className="text-secondary-chartreuse lg:w-[250px] h-auto" />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 ml-auto rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-9" />
            </button>
          </header>
          
        </DialogPanel>
      </Dialog>
    </div>
  )
}
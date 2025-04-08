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
    
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-br from-primary-indigo to-primary-cuny-blue text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <BaruchLogoHorizontal className="w-[200px] h-auto lg:w-[300px] text-white mt-1" />
              <AccelerateAmbition className="text-primary-sky lg:w-[250px] h-auto" />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="mt-6 flex flex-col gap-y-2">
            <div className="space-y-2 py-6">
              {mainNavLinks.map((item) => (
                <Disclosure key={item.name}>
                  <DisclosureButton className="text-xl font-bold text-white/90 hover:text-white">
                    {item.title}
                    <ChevronDownIcon aria-hidden="true" className="size-5" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500">
                    Yes! You can purchase a license that you can share with your entire team.
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
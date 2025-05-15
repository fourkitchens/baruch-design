'use client'

import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from "react";
import mainNavLinks from '@/data/primaryNav';
import Logo from '@/components/logo';
import gritImage from '@/assets/images/gritty-texture-sand-on-transparent-background-monochrome-noise-halftone-grit-pattern-isolated-illustration-vector.jpg'; 
import Image from 'next/image';
import Search from '@/components/search';
import utilityNav from '@/data/utilityNav';
import clsx from 'clsx';
import { AnimatePresence, easeOut, motion } from 'framer-motion'

const Header = ({ setMobileMenuOpen }) => {
  return (
    <div className="flex flex-row items-center lg:items-end justify-start max-width-wrapper py-3 md:py-7 z-40 relative">
      <Logo />

      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        className="ml-auto rounded-md p-2.5 text-white"
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon aria-hidden="true" className="size-9" />
      </button>
    </div> 
  )
}

const MainNavLink = ({link}) => {
  return (
    <Disclosure as="li" className="w-full">
      {({ open }) => (
        <>
          <div className={clsx("px-6 pt-3 pb-2 transition-all duration-[0.2]", open ? " pb-0" : "")}>
            <DisclosureButton className={clsx("text-4xl font-bold font-sans-condensed uppercase flex items-center gap-x-1 transition-all duration-[0.1] relative z-30", open ? "text-primary-cuny-blue" : "text-white")}>
              {link.title}
              <ChevronDownIcon aria-hidden="true" className={clsx("size-8 transition-all duration-[0.1]", open ? "-rotate-180 text-primary-cuny-blue" : "rotate-0 text-primary-sky")} />
            </DisclosureButton>
          </div>
          <div className=" ">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className={clsx("origin-top bg-neutral-pearl pt-4 pb-2", open ? "-mt-16 pt-16" : "mt-0 pt-0")}
                  >
                    {link?.popoverMobile}
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  )
}

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
        <DialogPanel className="fixed inset-0 bg-primary-indigo overflow-y-auto">
          <Header setMobileMenuOpen={setMobileMenuOpen} />

          <div className="relative z-50 pt-16 pb-8 min-h-[calc(100vmin-80px)] flex flex-col gap-16">
            <ul className="flex flex-col">
              {mainNavLinks.map((link) => (
                <MainNavLink link={link} key={link.title} />
              ))}
            </ul>

            <Search />

            <div className="flex flex-col gap-6 mt-auto px-6">
              <div className="flex justify-start gap-4 py-2">
                <a href="/apply" className="bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo px-6 py-2 font-bold rounded-sm transition-all">
                  Apply Now
                </a>
                <a href="/visit" className="bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white px-6 py-2 font-bold rounded-sm transition-colors">
                  Plan a Visit
                </a>
              </div>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-content">
                {utilityNav.map((item) => (
                  <li key={item.title}>
                    <a href={item.url} className={clsx("text-sm font-medium text-white/90 hover:text-white leading-none link link-indigo-bg",
                    )}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
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
    <Disclosure as="div" className="w-full max-w-md">
      {({ open }) => (
        <>
          <DisclosureButton className="text-white text-4xl font-bold font-sans-condensed uppercase flex items-center gap-x-1">
            {link.title}
            <ChevronDownIcon aria-hidden="true" className="size-8 text-primary-sky" />
          </DisclosureButton>
          <div className="overflow-hidden -mx-6">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top bg-white px-6 py-4"
                  >
                    Yes! You can purchase a license that you can share with your entire team.
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
        <DialogPanel className="fixed inset-0 bg-primary-indigo">
          <Header setMobileMenuOpen={setMobileMenuOpen} />

          <div className="max-width-wrapper relative z-50 pt-16 pb-8 min-h-[calc(100vmin-80px)] flex flex-col gap-16">
            <ul className="flex flex-col gap-6">
              {mainNavLinks.map((link) => (
                <li key={link.title}>
                  <MainNavLink link={link} />
                </li>
              ))}
            </ul>

            <Search />

            <div className="flex flex-col gap-6 mt-auto">
              <div className="flex justify-start gap-4 py-2">
                <a href="/apply" className="bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo px-6 py-2 font-bold rounded-sm transition-all">
                  Apply Now
                </a>
                <a href="/visit" className="bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white px-6 py-2 font-bold rounded-sm transition-colors">
                  Plan a Visit
                </a>
              </div>

              <ul className="grid grid-cols-2 gap-1">
                {utilityNav.map((item) => (
                  <li key={item.title}>
                    <a href={item.url} className={clsx("text-sm font-medium text-white/90 hover:text-white leading-none link link-indigo-bg",
                    )}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            

          </div>
          
          <Image src={gritImage} alt="grit" className="absolute top-0 left-0 w-full h-full object-cover mix-blend-multiply opacity-20 z-0" />
          
          {/* <header className="">
            <div className="flex flex-row items-center lg:items-end justify-start max-width-wrapper py-3 md:py-7">
              <Logo />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 ml-auto rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-9" />
            </button>
          </header> */}
          
        </DialogPanel>
      </Dialog>
    </div>
  )
}
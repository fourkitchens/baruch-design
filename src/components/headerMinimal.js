/**
 * Deprecated
 */

import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import { Dialog, DialogPanel, DialogTitle, Description, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import Image from "next/image";
import imageSrc from "@/assets/images/Baruch-students_NVC.jpg";
import clsx from "clsx";

export default function HeaderMinimal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScroll = useRef(0);
  const headerRef = useRef(null);
  const SCROLL_THRESHOLD = 5; // Minimum pixels to scroll before triggering state change

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    const scrollDiff = Math.abs(currentScroll - lastScroll.current);

    // Update isAtTop state
    setIsAtTop(currentScroll <= 0);

    // Only update if we've scrolled more than the threshold
    if (scrollDiff > SCROLL_THRESHOLD) {
      if (currentScroll <= 0) {
        setIsSticky(false);
      } else if (currentScroll > lastScroll.current) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      lastScroll.current = currentScroll;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header 
      ref={headerRef} 
      className={clsx(`bg-gradient-to-r from-primary-indigo to-primary-cuny-blue z-50 fixed top-0 w-full transition-all duration-300 ease-in-out py-7`,
        {
        '-translate-y-full': isSticky,
        'translate-y-0': !isSticky,
      })}
    >

      <div className="flex flex-row items-center lg:items-end justify-start max-width-wrapper">
        <div className="flex flex-row items-center gap-4">
          <div>
            <button
              type="button"
              className="flex items-center justify-center text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only hidden">Open menu</span>
              <Bars3Icon className={clsx('transition-all duration-300 ease-in-out size-9')} aria-hidden="true" />
            </button>
          </div>
          <BaruchLogoHorizontal className={clsx('transition-all duration-300 ease-in-out text-white w-[200px] h-auto lg:w-[300px]')} />
        </div>
        
        <div className="ms-auto flex-row items-center gap-8 hidden lg:flex">
          <div className="flex justify-end items-center gap-4">
            <a href="/apply" className={clsx("bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo font-bold rounded-sm transition-all px-6 py-2")}>
              Apply Now
            </a>
            <a href="/visit" className={clsx("bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white font-bold rounded-sm transition-colors px-6 py-2")}>
              Plan a Visit
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <Dialog static open={menuOpen} onClose={() => setMenuOpen(false)} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            >
              <div className="fixed inset-0 flex w-screen items-center justify-center z-20">
                <DialogPanel
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 pt-7 bg-primary-indigo text-white"
                >
                  <Image src={imageSrc} alt="Baruch Students" className="absolute inset-0 -z-10 size-full object-cover opacity-50" />

                  <div className="flex flex-row items-center lg:items-end justify-start max-width-wrapper">
                    <div className="flex flex-row items-center gap-4">
                      <div>
                        <button
                          type="button"
                          className="flex items-center justify-center text-white/80 hover:text-white transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="sr-only hidden">Open menu</span>
                          <XMarkIcon className="size-9" aria-hidden="true" />
                        </button>
                      </div>
                      <BaruchLogoHorizontal className="w-[200px] h-auto lg:w-[300px] text-white" />
                    </div>
                    
                    <div className="ms-auto flex-row items-center gap-8 hidden lg:flex">
                      <div className="flex justify-end items-center gap-4">
                        <a href="/apply" className="bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo px-6 py-2 font-bold rounded-sm transition-all">
                          Apply Now
                        </a>
                        <a href="/visit" className="bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white px-6 py-2 font-bold rounded-sm transition-colors">
                          Plan a Visit
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <DialogTitle className="text-lg font-bold">Deactivate account</DialogTitle>
                  <Description>This will permanently deactivate your account</Description>
                  <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                  <div className="flex gap-4">
                    <button onClick={() => setMenuOpen(false)}>Cancel</button>
                    <button onClick={() => setMenuOpen(false)}>Deactivate</button>
                  </div> */}

                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-cuny-blue via-secondary-grape to-primary-navy mix-blend-multiply saturate-50" />
                </DialogPanel>
              </div>
              
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}

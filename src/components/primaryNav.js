import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import mainNavLinks from '@/data/primaryNav';

export default function PrimaryNav() {
  return (
    <PopoverGroup className="flex items-center justify-start gap-2">
      {mainNavLinks.map((item) => (
        <Popover className="relative isolate shadow-sm first:-ms-4" key={item.title}>
          <PopoverButton className={clsx("text-xl font-bold text-white/90 hover:text-white",
            "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky",
            "flex items-center gap-x-1",
            "py-2 ps-4 pe-2"
          )}>
            {item.title}
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute left-0 top-5 rounded-sm shadow-lg z-10 mt-5 flex w-screen max-w-max bg-white -translate-x-8 transition data-closed:translate-y-8 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
          >{item.popover}</PopoverPanel>
        </Popover>
      ))}
    </PopoverGroup>
  );
};
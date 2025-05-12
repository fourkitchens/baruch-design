import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import mainNavLinks from '@/data/primaryNav';

export default function PrimaryNav() {
  return (
    <div className="flex flex-row items-center gap-2">
      <PopoverGroup className="flex items-center justify-start gap-2 relative">
        {mainNavLinks.map((item) => (
          <Popover className=" isolate first:-ms-2" key={item.title}>
            <PopoverButton className={clsx("text-lg tracking-wide font-bold text-white/90 hover:text-white",
              "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky",
              "flex items-center gap-x-1",
              "p-2"
            )}>
              {item.title}
              <ChevronDownIcon aria-hidden="true" className="size-5 text-primary-sky" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-0 -translate-x-4 top-5 rounded-sm shadow-lg z-50 mt-5 flex w-[calc(100vw-1rem)] max-w-max bg-white transition data-closed:translate-y-8 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >{item.popover}</PopoverPanel>
          </Popover>
        ))}
      </PopoverGroup>  
    </div>
  );
};
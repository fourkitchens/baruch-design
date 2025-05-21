import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination() {
  return (
    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
      <a
        href="#"
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
      </a>
      <a
        href="#"
        aria-current="page"
        className="relative z-10 inline-flex items-center bg-primary-cuny-blue px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-cuny-blue"
      >
        1
      </a>
      <a
        href="#"
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0"
      >
        2
      </a>
      <a
        href="#"
        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0 md:inline-flex"
      >
        3
      </a>
      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body ring-1 ring-neutral-pewter/30 ring-inset focus:outline-offset-0">
        ...
      </span>
      <a
        href="#"
        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0 md:inline-flex"
      >
        8
      </a>
      <a
        href="#"
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0"
      >
        9
      </a>
      <a
        href="#"
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0"
      >
        10
      </a>
      <a
        href="#"
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-body ring-1 ring-neutral-pewter/30 ring-inset hover:bg-white focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon aria-hidden="true" className="size-5" />
      </a>
    </nav>
  );
}


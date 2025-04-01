import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const defaultPages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Breadcrumbs({ pages = defaultPages }) {
  return (
    <nav aria-label="Breadcrumb" className="flex text-neutral-pewter text-sm font-medium">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <div>
            <a href="#" className="link-neutral-dove link-hover-neutral-charcoal hover:text-neutral-charcoal">
              <span>Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center gap-1">
              <span className="text-neutral-pewter/60">/</span>
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className="link-neutral-dove link-hover-neutral-charcoal hover:text-neutral-charcoal"
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

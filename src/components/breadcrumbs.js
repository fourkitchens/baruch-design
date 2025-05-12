'use client'

import { useState, useEffect } from 'react'

const defaultPages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Breadcrumbs({ pages = defaultPages }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const renderBreadcrumbs = () => {
    if (isExpanded) {
      return pages.map((page, idx) => (
        <li key={page.name} className={idx === pages.length - 1 ? 'flex-1' : ''}>
          <div className={idx === pages.length - 1 ? 'flex items-center gap-1 flex-1' : 'flex items-center gap-1'}>
            <span className="text-neutral-pewter/60">/</span>
            <a
              href={page.href}
              aria-current={page.current ? 'page' : undefined}
              className="link link-breadcrumbs hover:text-neutral-charcoal"
            >
              {page.name}
            </a>
          </div>
        </li>
      ))
    }

    const lastPage = pages[pages.length - 1]
    return (
      <>
        <span className="text-neutral-pewter/60">/</span>
        <li>
          <button
            onClick={() => {
              setIsExpanded(true)
            }}
            className="link link-breadcrumbs hover:text-neutral-charcoal"
          >
            ...
          </button>
        </li>
        <li className="min-w-0 max-w-content flex-1">
          <div className="flex items-center gap-1 min-w-0 max-w-content flex-1">
            <span className="text-neutral-pewter/60">/</span>
            <a
              href={lastPage?.href}
              aria-current={lastPage?.current ? 'page' : undefined}
              className="link link-breadcrumbs hover:text-neutral-charcoal truncate whitespace-nowrap overflow-hidden block"
            >
              {lastPage?.name}
            </a>
          </div>
        </li>
      </>
    )
  }

  return (
    <nav aria-label="Breadcrumb" className="flex text-neutral-pewter text-sm leading-none font-medium w-full max-w-full overflow-hidden">
      <ol role="list" className="flex flex-row flex-wrap items-center space-x-1 w-full max-w-full overflow-hidden">
        <li>
          <div>
            <a href="#" className="link link-breadcrumbs hover:text-neutral-charcoal">
              <span>Home</span>
            </a>
          </div>
        </li>
        {renderBreadcrumbs()}
      </ol>
    </nav>
  )
}

'use client'

import { useState, useEffect, useCallback } from 'react'

const defaultPages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Breadcrumbs({ pages = defaultPages }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [userExpanded, setUserExpanded] = useState(false)

  // Handle responsive expansion
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches
      if (isLargeScreen) {
        setIsExpanded(true)
      } else if (!userExpanded) {
        setIsExpanded(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [userExpanded])

  // Render all breadcrumbs (expanded)
  const renderExpanded = useCallback(() => (
    pages.map((page, idx) => (
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
  ), [pages])

  // Render collapsed breadcrumbs (Home, ellipsis, last)
  const renderCollapsed = useCallback(() => {
    const lastPage = pages[pages.length - 1]
    return (
      <>
        <span className="text-neutral-pewter/60">/</span>
        <li>
          <button
            onClick={() => {
              setIsExpanded(true)
              setUserExpanded(true)
            }}
            className="link link-breadcrumbs hover:text-neutral-charcoal"
            aria-label="Expand breadcrumbs"
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
  }, [pages])

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex text-neutral-pewter text-sm leading-none font-medium w-full max-w-full overflow-hidden"
      style={{ '--show-overflow': isExpanded ? 1 : 0 }}
    >
      <ol role="list" className="flex flex-row flex-wrap items-center space-x-1 w-full max-w-full overflow-hidden">
        <li>
          <div>
            <a href="#" className="link link-breadcrumbs hover:text-neutral-charcoal">
              <span>Home</span>
            </a>
          </div>
        </li>
        {isExpanded ? renderExpanded() : renderCollapsed()}
      </ol>
    </nav>
  )
}

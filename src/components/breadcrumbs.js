'use client'

import { useState, useEffect, useCallback } from 'react'
import clsx from 'clsx'

const defaultPages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Breadcrumbs({ pages = defaultPages, className }) {
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
          <span className="text-(--text-color)/60">/</span>
          <a
            href={page.href}
            aria-current={page.current ? 'page' : undefined}
            className="link link-breadcrumbs text-(--link-color) hover:text-(--link-hover-color)"
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
        <span className="text-(--text-color)/60">/</span>
        <li>
          <button
            onClick={() => {
              setIsExpanded(true)
              setUserExpanded(true)
            }}
            className="link link-breadcrumbs text-(--link-color) hover:text-(--link-hover-color)"
            aria-label="Expand breadcrumbs"
          >
            ...
          </button>
        </li>
        <li className="min-w-0 max-w-content flex-1">
          <div className="flex items-center gap-1 min-w-0 max-w-content flex-1">
            <span className="text-(--text-color)/60">/</span>
            <a
              href={lastPage?.href}
              aria-current={lastPage?.current ? 'page' : undefined}
              className="link link-breadcrumbs text-(--link-color) hover:text-(--link-hover-color) truncate whitespace-nowrap overflow-hidden block"
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
      className={clsx(
        "flex w-full max-w-full overflow-hidden",
        "[--text-color:var(--color-neutral-pewter)]",
        "[--link-color:var(--color-neutral-pewter)]",
        "[--link-hover-color:var(--color-neutral-charcoal)]",
        "[--link-current-color:var(--color-neutral-charcoal)]",
        "[--link-current-hover-color:var(--color-neutral-charcoal)]",
      )}
      style={{ '--show-overflow': isExpanded ? 1 : 0 }}
    >
      <ol role="list" className={clsx(
        "text-(--text-color) text-sm leading-none font-medium flex flex-row flex-wrap items-center space-x-1 w-full max-w-full overflow-hidden",
        className,
      )}>
        <li>
          <div>
            <a href="#" className="text-(--link-color) hover:text-(--link-hover-color) link link-breadcrumbs">
              <span>Home</span>
            </a>
          </div>
        </li>
        {isExpanded ? renderExpanded() : renderCollapsed()}
      </ol>
    </nav>
  )
}

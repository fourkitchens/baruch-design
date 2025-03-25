import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";
import NavSection from './NavSection';

const sections = [
  {
    header: "Our Leadership",
    items: [
      {
        title: "President S. David Wu, PhD",
        url: "#"
      },
      {
        title: "Office of the Provost",
        url: "#"
      },
      {
        title: "President's Cabinet",
        url: "#"
      }
    ]
  },
  {
    header: "Mission",
    items: [
      {
        title: "Mission Statement",
        url: "#"
      },
      {
        title: "Accreditation",
        url: "#"
      },
      {
        title: "Baruch at a Glance",
        url: "#"
      },
      {
        title: "Economic Mobility at a Glance",
        url: "#"
      },
      {
        title: "Diversity at Baruch",
        url: "#"
      },
      {
        title: "Legal Affairs and Labor Relations",
        url: "#"
      },
      {
        title: "Fact Sheet",
        url: "#"
      },
      {
        title: "Institutional Research",
        url: "#"
      },
      {
        title: "Honors and Rankings",
        url: "#"
      },
      {
        title: "Baruch Strategic Planning",
        url: "#"
      },
      {
        title: "Video Library",
        url: "#"
      }
    ]
  }
];

const initiatives = [
  { name: 'Council on Diversity and Inclusion', href: '#'},
  { name: 'Task Force for the Future', href: '#'},
]

const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]

export default function PrimaryNavAbout() {
  return (
    <Popover className="relative isolate z-50 shadow-sm">
      
      <PopoverButton className={clsx("text-xl font-bold text-white/90 hover:text-white",
        "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky",
        "flex items-center gap-x-1"
      )}>
        About 
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>
        
      <PopoverPanel
        transition
        className="absolute left-0 top-5 rounded-sm shadow-lg z-10 mt-5 flex w-screen max-w-max bg-white -translate-x-4 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 divide-x divide-primary-sky">
          {sections.map((section) => (
            <NavSection 
              key={section.header}
              header={section.header}
              items={section.items}
            />
          ))}
            {/*<div className="pr-6">
               <img
                  alt=""
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  className="aspect-3/1 w-full rounded-sm bg-gray-100 object-cover sm:h-32 lg:h-auto mb-8"
                />
              <h3 className="text-base/6 text-neutral-charcoal uppercase font-bold">Our Leadership</h3>
              <div className="mt-6 flow-root">
                <ul className="-my-2">
                  <li>
                    {leadership.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx("inline-block py-1 text-base font-medium text-primary-cuny-blue",
                          "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </li>
                </ul>
              </div>
              <h3 className="text-base/6 text-neutral-charcoal uppercase font-bold mt-8">Presidential Initiatives</h3>
              <div className="mt-6 flow-root">
                <ul className="-my-2">
                  <li>
                    {initiatives.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx("inline-block py-1 text-base font-medium text-primary-cuny-blue",
                          "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="pr-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                className="aspect-3/1 w-full rounded-sm bg-gray-100 object-cover sm:h-32 lg:h-auto mb-8"
              />
              <h3 className="text-base/6 text-neutral-charcoal uppercase font-bold">Our Mission</h3>
              <div className="mt-6 flow-root">
                <ul className="-my-2">
                  {mission.map((item) => (
                    <li>
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx("inline-block py-1 text-base font-medium text-primary-cuny-blue",
                          "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky"
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
          <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
            <h3 className="sr-only">Recent posts</h3>
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
              >
                <div className="relative flex-none">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4">
                    <time dateTime={post.datetime} className="text-sm/6 text-gray-600">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <h4 className="mt-2 text-sm/6 font-semibold text-gray-900">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-2 text-sm/6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

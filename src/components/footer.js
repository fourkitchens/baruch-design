import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Automation', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
  explore: [
    { name: 'About', href: '#' },
    { name: 'Map and Directions', href: '#' },
    { name: 'Public Safety', href: '#' },
    { name: 'Security Desks', href: '#' },
    { name: 'Report an Emergency', href: '#' },
  ],
  support: [
    { name: 'Campus Intervention Team (CIT)', href: '#' },
    { name: 'Counseling Center', href: '#' },
    { name: 'Diversity, Equity, and Inclusion', href: '#' },
    { name: 'Title IX', href: '#' },
    { name: 'Non-Discrimination Policy', href: '#' },
  ],
  resources: [
    { name: 'Careers at Baruch', href: '#' },
    { name: 'Human Resources', href: '#' },
    { name: 'Technology (BCTC)', href: '#' },
    { name: 'Legal Affairs and Labor Relations', href: '#' },
    { name: 'A-Z Index', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: faFacebook,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: faYoutube,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: faInstagram,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: faLinkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-indigo">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-12 lg:pb-32">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="xl:col-span-2">
            <BaruchLogoHorizontal className="w-[250px] text-white" />
            <p>One Bernard Baruch Way</p>
            <p>55 Lexington Avenue (at 24th Street)</p>
            <p className="mb-2">New York, NY 10010</p>
            <p>646-312-1000</p>
            <ul className="flex gap-4 mt-8">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className={clsx("text-base text-primary-sky hover:text-white leading-none inline-block")}>
                    <FontAwesomeIcon icon={item.icon} className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 xl:mt-0 ms-auto xl:col-span-3">
            <div className="md:grid md:grid-cols-3 md:gap-8 md:divide-x md:divide-white/10 pt-2">
              <div className="pe-8">
                <h3 className="text-base font-semibold text-white leading-tight">Explore Baruch</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.explore.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={clsx("text-base text-primary-sky hover:text-white leading-tight inline-block",
                        "after:content-[''] after:block after:max-w-0 after:top-1 after:relative hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.25 hover:after:bg-primary-sky"
                      )}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0 pe-8">
                <h3 className="text-base font-semibold text-white leading-tight">Support and Advocacy</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={clsx("text-base text-primary-sky hover:text-white leading-tight inline-block",
                        "after:content-[''] after:block after:max-w-0 after:top-1 after:relative hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.25 hover:after:bg-primary-sky"
                      )}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pe-8">
                <h3 className="text-base font-semibold text-white leading-tight">Administrative Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={clsx("text-base text-primary-sky hover:text-white leading-none inline-block",
                        "after:content-[''] after:block after:max-w-0 after:top-1 after:relative hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.25 hover:after:bg-primary-sky"
                      )}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

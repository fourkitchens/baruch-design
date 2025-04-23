import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socialNavLinks from '@/data/socialNav'
import clsx from 'clsx'

export default function SocialNav({className, location}) {
  return (
    <nav className={`${className} flex flex-row items-center gap-2 leading-none text-xl`}>
      {socialNavLinks.map((link) => (
        <a href={link.href} key={link.name} className={clsx("transition-colors duration-300", location === "footer" && "text-primary-sky hover:text-white", location === "header" && "text-white/90 hover:text-white")}>
          <FontAwesomeIcon icon={link.icon} className={clsx(location === "footer" && "size-6", location === "header" && "size-5")} />
        </a>
      ))}
    </nav>
  );
}
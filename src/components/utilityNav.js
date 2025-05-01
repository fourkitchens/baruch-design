import clsx from 'clsx';
import utilityNav from '@/data/utilityNav';

export default function UtilityNav() {
  return (
    <nav className="bg-primary-indigo py-1">
      <ul className="flex items-center justify-end gap-4 max-width-wrapper">
        {utilityNav.map((item) => (
          <li key={item.title}>
            <a href={item.url} className={clsx("text-sm text-white/90 hover:text-white leading-none link link-indigo-bg",
            )}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
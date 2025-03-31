import clsx from 'clsx';

const utilityNavItems = [
  {
    title: "Calendar",
    url: "#"  // Add actual URLs as needed
  },
  {
    title: "Directory",
    url: "#"
  },
  {
    title: "Library",
    url: "#"
  },
  {
    title: "President's Office",
    url: "#"
  },
  {
    title: "News Center",
    url: "#"
  },
  {
    title: "Technology",
    url: "#"
  },
  {
    title: "Index A-Z",
    url: "#"
  }
];

export default function UtilityNav() {
  return (
    <nav className="bg-primary-indigo py-1">
      <ul className="flex items-center justify-end gap-4 max-width-wrapper">
        {utilityNavItems.map((item) => (
          <li key={item.title}>
            <a href={item.url} className={clsx("text-sm text-white/90 hover:text-white leading-none",
              "after:content-[''] after:block after:max-w-0 after:-top-1 after:relative hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.25 hover:after:bg-primary-sky"
            )}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
import clsx from "clsx";

const NavSection = ({ header, items }) => {
  return (
    <div>
      <h3 className="text-base/6 text-neutral-charcoal uppercase font-bold">{header}</h3>
      <div className="mt-6 flow-root">
        <ul className="-my-2">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                className={clsx("inline-block py-1 text-base font-medium text-primary-cuny-blue",
                  "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavSection; 
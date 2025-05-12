import clsx from "clsx";
import Image from "next/image";

const NavSection = ({ header, items, className, maxItems = 5, image }) => {
  const displayedItems = items.slice(0, maxItems);

  return (
    <div className={className}>
      {image && (
        <div className="mb-6 hidden xl:block">
          <Image
            src={image}
            alt=""
            className="w-full h-auto rounded-sm outline-1 -outline-offset-1 outline-black/10 aspect-video object-cover"
          />
        </div>
      )}
      <h3 className="text-base/6 text-neutral-charcoal uppercase font-bold">{header}</h3>
      <div className="mt-6 flow-root">
        <ul className="-my-2">
          {displayedItems.map((item) => (
            <li key={item.title} className="py-2 leading-tight">
              <a
                href={item.url}
                className={clsx("text-base font-medium text-primary-cuny-blue link link-mega-menu",
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
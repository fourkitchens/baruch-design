import clsx from "clsx";
import Image from "next/image";

const NavSectionMobile = ({ header, items, className, maxItems = 5, image }) => {
  const displayedItems = items.slice(0, maxItems);

  return (
    <div className={clsx("bg-white rounded p-2 ring-1 ring-neutral-dove", className)}>
      {image && (
        <div className="mb-6">
          <Image
            src={image}
            alt=""
            className="w-full h-auto rounded-sm outline-1 -outline-offset-1 outline-black/10 aspect-video object-cover"
          />
        </div>
      )}
      <div className="px-2">
        <h3 className="text-base/6 text-neutral-charcoal leading-none uppercase font-bold">{header}</h3>
        <div className="mt-6 pb-4 flow-root">
          <ul className="-my-2">
            {displayedItems.map((item) => (
              <li key={item.title} className="py-1">
                <a
                  href={item.url}
                  className={clsx("text-base font-medium text-primary-cuny-blue link link-mega-menu leading-tight inline-block",
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default NavSectionMobile; 
import Image from "next/image";
import clsx from "clsx";
export default function ProseImage({src, alt, caption, presentation}) {

  return (
    <figure className={clsx(
      'not-prose',
      presentation === "Breakout" && "lg:-mx-16 lg:my-16",
      presentation === "Hang Left" && "w-1/2 float-left mr-4 mb-4 lg:mb-16 lg:-ml-64 lg:mr-16",
      presentation === "Hang Right" && "w-1/2 float-right ml-4 mb-4 lg:mb-16 lg:-mr-64 lg:ml-16",
    )}>
      <Image 
        src={src} 
        alt={alt} 
        className="block" 
      />
      {caption && <figcaption className="not-prose mt-2 text-sm text-neutral-charcoal italic">
        {caption}
      </figcaption>}
    </figure>
  );
}
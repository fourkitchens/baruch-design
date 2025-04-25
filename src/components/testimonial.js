import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/pro-regular-svg-icons'
import clsx from 'clsx'

export default function Testimonial({ 
  name, 
  title, 
  quote, 
  image, 
  className, 
  imageSide = "left" 
}) {
  const imageClasses = clsx(
    "col-span-2 relative group row-start-1 cursor-pointer",
    {
      "col-start-4": imageSide === "right",
      "col-start-1": imageSide === "left"
    }
  );

  const captionClasses = clsx(
    "col-span-3 row-start-1",
    {
      "col-start-1": imageSide === "right",
      "col-start-3": imageSide === "left"
    }
  );

  return (
    <section className={clsx("isolate px-6 lg:px-8", className)}>
      <div className={clsx("relative mx-auto bg-white rounded-3xl p-4 ring-1 ring-neutral-pearl-dark shadow-lg", {
        "ps-16": imageSide === "right",
        "pe-16": imageSide === "left"
      })}>
        <figure className="grid grid-cols-5 gap-8 items-center">
          <div className={imageClasses}>
            <Image src={image} alt={name} className="rounded-lg bg-indigo-50 lg:rounded-xl" />
            <FontAwesomeIcon 
              icon={faCirclePlay} 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 text-6xl group-hover:text-white group-hover:scale-125 transition-all duration-300"
            />
          </div>
          
          <figcaption className={captionClasses}>
            <blockquote className="text-xl font-normal mb-6">
              <p className="first-line:text-2xl first-line:font-semibold line-clamp-8">
                {quote}
              </p>
            </blockquote>
            <div className="text-base font-semibold opacity-90">{name}</div>
            <div className="text-base mt-1 opacity-70">{title}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
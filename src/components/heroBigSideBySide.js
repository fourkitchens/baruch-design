import Image from "next/image";
import clsx from "clsx";

export default function HeroBigSideBySide({ 
  image, 
  title, 
  content, 
  date,
  breadcrumbs,
  backgroundColor = "bg-secondary-tangerine",
  titleClassName = "text-pretty text-7xl font-bold leading-none uppercase tracking-tight font-sans-condensed text-white",
  contentClassName = "mt-4 lg:mt-8 text-pretty text-base lg:text-lg font-medium text-white sm:text-xl/8",
  additionalContent
}) {
  return (
    <div className={clsx("relative", backgroundColor, "text-white")}>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className={clsx(
          "mx-auto max-w-2xl",
          "py-8 px-6",
          "md:py-16",
          "lg:col-span-7 lg:pb-32 lg:pt-10 lg:px-0 lg:max-w-lg lg:mx-0 lg:mt-24",
          "xl:col-span-6",
        )}>
          {date && <p className="text-white text-base font-medium mb-2">{date}</p>}
          {breadcrumbs}
          <h1 className={titleClassName}>
            {title}
          </h1>
          <p className={contentClassName}>
            {content}
          </p>
          {additionalContent}
        </div>
        
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image src={image} alt="Photo" className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
        </div>
      </div>
    </div>
  );
};
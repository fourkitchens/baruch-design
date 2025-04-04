import Image from "next/image";

export default function HeroBigSideBySide({ image, title, content }) {
  return (
    <div className="relative bg-secondary-tangerine text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="mt-24 text-pretty text-[86px] leading-none uppercase font-normal tracking-tight font-league-gothic text-white sm:mt-10 ">
              {title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
              {content}
            </p>
          </div>
        </div>
        
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image src={image} alt="Photo" className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
        </div>
      </div>
    </div>
  );
};
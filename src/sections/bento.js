import Image from "next/image";
import photo from "@/assets/images/gettyimages-2094337676-2048x2048.jpg";
import wu from "@/assets/images/president-wu-23-street.png";
import photo2 from "@/assets/images/gettyimages-1132123971-2048x2048.jpg";
import nyc from "@/assets/images/gettyimages-1475073978-2048x2048.jpg";

export default function Bento() {
  return (
    <div className="bg-background py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary-sky">Explore academics at Baruch</h2>
        <p className="mt-2 text-[200px] leading-[150px] font-field-gothic font-semibold text-pretty text-white uppercase">
          What starts here <span className="text-secondary-chartreuse">never stops</span>
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-primary-midtown-blue/60 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <Image src={photo} alt="Photo" className="h-80 object-cover object-left" />
              <div className="p-10">
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-charcoal">
                  <a href="#" className="hover:text-primary-midtown-blue decoration-primary-sky underline">Explore Academics</a>
                </h3>
                <p className="mt-2 max-w-2xl text-sm/6 text-neutral-charcoal">
                  At Baruch College, students engage in a rich academic life, developing a capacity for professional achievement, intellectual exploration, and personal growth. Throughout their education, Baruch students expand their perspective while exploring the vibrant College community.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-primary-midtown-blue/60 lg:rounded-tr-[2rem]">
              <Image src={wu} alt="Photo" className="h-80 object-cover" />
              <div className="p-10">
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-charcoal">
                  <a href="#" className="hover:text-primary-midtown-blue decoration-primary-sky underline">Meet President Wu</a>
                </h3>
                <p className="mt-2 max-w-2xl text-sm/6 text-neutral-charcoal">
                  With a track record of visionary higher education leadership, President S. David Wu is dedicated to ensuring Baruch College serves as a national model for access and excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-primary-midtown-blue/60 lg:rounded-bl-[2rem]">
              <Image src={photo2} alt="Photo" className="h-80 object-cover" />
              <div className="p-10">
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-charcoal">
                  <a href="#" className="hover:text-primary-midtown-blue decoration-primary-sky underline">Baruch Connects</a>
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-charcoal">
                  Baruch’s exciting year-long initiative designed around our core values of collaboration and connection.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-primary-midtown-blue/60 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <Image src={nyc} alt="Photo" className="h-80 object-cover object-left" />
              <div className="p-10">
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-charcoal">
                  <a href="#" className="hover:text-primary-midtown-blue decoration-primary-sky underline">New York City</a>
                </h3>
                <p className="mt-2 max-w-2xl text-sm/6 text-neutral-charcoal">
                  Situated on Lexington Avenue near the Flatiron and Gramercy Park districts of Manhattan, Baruch College is in the heart of one of the world’s most dynamic financial and cultural centers. The College is within easy reach of Wall Street, Midtown, the United Nations, and the global headquarters of major companies and organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

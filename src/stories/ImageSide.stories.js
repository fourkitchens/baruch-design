import ImageSide from "@/components/imageSide";
import photo from "@/assets/images/gettyimages-576902490-2048x2048.jpg";

export default {
  title: 'Components/ImageSide',
  component: ImageSide,
  decorators: [ 
    (Story) => (
      <div className="min-h-[200vh]">
        <Story />
      </div>
    ),
  ],
  args: {
    image: photo,
    alt: "Photo",
    bg: "bg-primary-midtown-blue",
    children: (
      <div>
        <div className="hidden sm:mt-32 sm:flex lg:mt-16">
          <div className="relative rounded-full px-3 py-1 text-base/6 text-white ring-1 ring-primary-sky/40">
            Academic Excellence at Baruch{' '}
            <a href="#" className="whitespace-nowrap font-semibold text-primary-sky">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 className="mt-24 text-pretty text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-white sm:mt-10">
          Create Something 
          <span className="block text-secondary-chartreuse text-[210px]">Unprecedented</span>
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
          Right in the heart of NYC, Baruch College gives 18,000+ students the opportunities they need to learn, grow, and launch their careers. Known for excellence, affordability, and access, it's a place where the American Dream is alive and thriving. Come see for yourself—take the tour!
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a href="#" className="rounded-md bg-secondary-tangerine px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-secondary-tangerine">
            Apply now
          </a>
          <a href="#" className="text-base/6 font-semibold text-neutral-pearl">
            Take a tour <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    ),
  },
  argTypes: {
    bg: {
      control: 'select',
      options: ['bg-primary-midtown-blue', 'bg-primary-cuny-blue', 'bg-primary-indigo', 'bg-primary-sky', 'bg-secondary-chartreuse', 'bg-secondary-grape', 'bg-secondary-lemonade', 'bg-secondary-ochre', 'bg-secondary-tangerine', 'bg-secondary-taxi', 'bg-secondary-thistle'],
      description: 'The image background color',
    },
  },
};

export const ImageSideTemplate = {
  name: 'ImageSide',
};
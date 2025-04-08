import Breadcrumbs from "@/components/breadcrumbs";
import LayoutPage from "@/components/layoutPage";
import PageTitle from "@/components/pageTitle";
import news1 from '@/assets/images/news1.gif';
import news2 from '@/assets/images/news2.gif';
import news3 from '@/assets/images/UNA-USA-Fellow_.gif';
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import marketplace from '@/assets/images/marketplace.png';

const breadcrumbData = [
  { name: 'News', href: '#', current: false },
]

const posts = [
  {
    id: 1,
    title: "Baruch and SUNY Broome Launch Seamless Transfer Program for Business Students",
    href: '#',
    description:
      "A new 2+2 agreement guarantees SUNY Broome business students admission to Baruch's Zicklin School of Business if they meet academic requirements.",
    imageUrl: news1,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
  {
    id: 2,
    title: "Baruch Team Shines with Second Place Win at National Deloitte Challenge",
    href: '#',
    description:
      "A standout team from Baruch's Zicklin School of Business claimed second place in Deloitte's national FanTAXtic competition—marking an impressive debut on the national stage.",
    imageUrl: news2,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
  {
    id: 3,
    title: "Baruch Senior Awarded Prestigious UN Fellowship to Advance Global Change",
    href: '#',
    description:
      "Baruch senior Adriana Lopez-Tavares was awarded the prestigious UNA-USA Fellowship, taking her passion for human rights and economic development to the United Nations Office for Disarmament Affairs.",
    imageUrl: news3,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
]

const categories = [
  { name: 'Academic Excellence', count: 45 },
  { name: 'Alumni Success', count: 67 },
  { name: 'Arts', count: 38 },
  { name: 'Business', count: 82 },
  { name: 'Faculty', count: 51 },
  { name: 'Global', count: 59 },
  { name: 'Public Affairs', count: 47 },
  { name: 'Rankings', count: 33 },
  { name: 'Science', count: 41 },
  { name: 'Social Mobility', count: 55 },
  { name: 'Student Success', count: 76 },
]

const Dropdown = ({ data }) => {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-body ring-1 shadow-xs ring-neutral-pewter/50 ring-inset hover:text-primary-cuny-blue">
          Filter by Category
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-neutral-pewter" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-neutral-pewter/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {data.map((category) => (
            <MenuItem key={category.name} as="div" className="hover:bg-primary-sky/10 group">
              <div className="flex items-center px-4 py-2">
                <input
                  type="checkbox"
                  id={category.name.toLowerCase().replace(/\s+/g, '-')}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                />
                <label
                  htmlFor={category.name.toLowerCase().replace(/\s+/g, '-')}
                  className="ml-2 text-sm text-body data-focus:bg-gray-100 data-focus:text-body data-focus:outline-hidden group-hover:text-primary-cuny-blue"
                >
                  {category.name} ({category.count})
                </label>
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}

const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col items-start justify-start">
      <div className="relative w-full">
        <Image
          alt=""
          src={post.imageUrl}
          className="aspect-video w-full rounded bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
        />
        <div className="absolute inset-0 rounded ring-1 ring-gray-900/10 ring-inset" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4">
          <time dateTime={post.datetime} className="text-body font-medium">
            {post.date}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-xl font-semibold text-heading">
            <a href={post.href} className="link">
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 text-base text-body">{post.description}</p>
        </div>
      </div>
    </article>
  );
};

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function NewsList() {
  return (
    <div>
      <LayoutPage wide={true}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>All News</PageTitle>
        </div>
        
        <div className="">
          <div className="">
            <div className="flex items-center gap-x-4">
              <Dropdown data={categories}/>
              <button className="group inline-flex items-center gap-x-2 rounded-md bg-transparent px-3 py-2 font-medium text-body hover:text-primary-cuny-blue">
                <ArrowPathIcon className="size-5 text-neutral-pewter group-hover:text-primary-cuny-blue" />
                Reset filters
              </button>
            </div>
            <div className="mt-8 grid grid-cols-5 gap-8 items-center">
              <Image src={marketplace} alt="Marketplace" className="w-full h-auto rounded col-span-3" />
              <div className="space-y-3 col-span-2">
                <p className="font-medium">April 7, 2025</p>
                <h2 className="text-heading text-3xl font-semibold leading-normal">
                  <a href="#" className="link">Fostering Creative Ventures: Inside Baruch’s Entrepreneur Marketplace</a>
                </h2>
                <p>Baruch College’s Entrepreneur Marketplace is a vibrant event that brings together student innovators and entrepreneurs to showcase their creative ventures and business ideas. This marketplace serves as a platform for students to connect with the broader community, gain valuable exposure, and receive feedback on their entrepreneurial endeavors.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
              {shuffleArray([...posts]).map((post) => (
                <PostCard key={`${post.id}-2`} post={post} />
              ))}
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {shuffleArray([...posts]).map((post) => (
                <PostCard key={`${post.id}-2`} post={post} />
              ))}
              {shuffleArray([...posts]).map((post) => (
                <PostCard key={`${post.id}-3`} post={post} />
              ))}
              {shuffleArray([...posts]).map((post) => (
                <PostCard key={`${post.id}-4`} post={post} />
              ))}
              {shuffleArray([...posts]).map((post) => (
                <PostCard key={`${post.id}-4`} post={post} />
              ))}
            </div>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

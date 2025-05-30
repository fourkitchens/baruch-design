import PostCard from "./postCard";
import posts from "./newsData";
import Image from "next/image";
import { faArrowRight } from '@fortawesome/sharp-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import featuredImage from '@/assets/images/weissman/Alvi-Khan_2025-Goldwater-Scholar.jpeg';

export default function News() {
  return (
    <section className="py-16">
      <div className="max-width-wrapper">
        <h2 className="text-pretty text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-primary-cuny-blue">
          News <span className="text-neutral-charcoal">+</span> Events
        </h2>
        <div className="mt-8 grid grid-cols-5 gap-8 items-center">
          <Image src={featuredImage} alt="Marketplace" className="w-full h-auto rounded col-span-3 aspect-[3/2] object-cover object-top" />
          <div className="space-y-3 col-span-2">
            <p className="font-medium">April 7, 2025</p>
            <h2 className="text-heading text-3xl font-semibold leading-normal">
              <a href="https://newscenter.baruch.cuny.edu/news/alvi-khan-baruch-college-first-goldwater-scholar/" className="link">
                Alvi Khan Named Baruch College’s First Goldwater Scholar
              </a>
            </h2>
            <p>
              Alvi Khan, a junior in the Weissman School of Arts and Sciences, has been awarded the prestigious Barry Goldwater Scholarship, recognizing her outstanding academic achievements and research in the sciences.
            </p>
          </div>
        </div>
        
        <h2 className={clsx(
          "text-pretty text-6xl font-sans-xcondensed font-semibold uppercase",
          "mt-16 mb-4"
        )}>
          <a href="#" className="link inline-flex items-center">
            News
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-2xl" />
          </a>
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        <h2 className={clsx(
          "text-pretty text-6xl font-sans-xcondensed font-semibold uppercase",
          "mt-16 mb-4"
        )}>
          <a href="#" className="link inline-flex items-center">
            Events
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-2xl" />
          </a>
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
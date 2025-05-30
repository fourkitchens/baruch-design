import PostCard from "./postCard";
import posts from "./newsData";
import Image from "next/image";
import { faArrowRight } from '@fortawesome/sharp-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import featuredImage from '@/assets/images/marxe/Class-of-2025-Valedictorian-and-Salutatorian.jpeg';

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
              <a href="#" className="link">Baruch College Announces Class of 2025 Valedictorian and Salutatorian</a>
            </h2>
            <p>Baruch College has announced its Class of 2025 valedictorian and salutatorian. The valedictorian, Abhinaya Swaminathan, is graduating summa cum laude with a Bachelor of Arts in Economics, Philosophy, and Political Science, and will attend Harvard Law School. The salutatorian, Sonja Kostich, a former professional dancer, is earning a Bachelor of Business Administration in Accounting and will begin working at Goldman Sachs.  </p>
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
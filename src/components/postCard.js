import Image from "next/image";
import clsx from "clsx";

export default function PostCard({ post, compact = false, showDescription = true }) {
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
          <time dateTime={post.datetime} className={clsx("text-body font-medium", compact ? "text-sm" : "text-base")}>
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
          {showDescription && <p className={clsx("mt-5 text-base text-body", compact ? "text-sm" : "text-base")}>{post.description}</p>}
        </div>
      </div>
    </article>
  );
};
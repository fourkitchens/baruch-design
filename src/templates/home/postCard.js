import Image from "next/image";

export default function PostCard({ post, showImage }) {
  return (
    <article className="flex flex-col items-start justify-start">
      {showImage && (<div className="relative w-full">
        <Image
          alt=""
          src={post.imageUrl}
          className="aspect-video w-full rounded bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
        />
        <div className="absolute inset-0 rounded ring-1 ring-gray-900/10 ring-inset" />
      </div>)}

      <div className="max-w-xl">
        <div className="group relative">
          <h3 className="mt-3 text-xl font-semibold text-heading">
            <a href={post.href} className="link">
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-3"><time dateTime={post.datetime} className="text-body font-medium">
            {post.date}
          </time></p>
          <p className="mt-5 text-base text-body">{post.description}</p>
        </div>
      </div>
    </article>
  );
};
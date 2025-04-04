import news1 from '@/assets/images/news1.gif';
import news2 from '@/assets/images/news2.gif';
import news3 from '@/assets/images/UNA-USA-Fellow_.gif';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Baruch and SUNY Broome Launch Seamless Transfer Program for Business Students',
    href: '#',
    description:
      'A new 2+2 agreement guarantees SUNY Broome business students admission to Baruch’s Zicklin School of Business if they meet academic requirements.',
    imageUrl: news1,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    id: 2,
    title: 'Baruch Team Shines with Second Place Win at National Deloitte Challenge',
    href: '#',
    description:
      'A standout team from Baruch’s Zicklin School of Business claimed second place in Deloitte’s national FanTAXtic competition—marking an impressive debut on the national stage.',
    imageUrl: news2,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    id: 3,
    title: 'Baruch Senior Awarded Prestigious UN Fellowship to Advance Global Change',
    href: '#',
    description:
      'Baruch senior Adriana Lopez-Tavares was awarded the prestigious UNA-USA Fellowship, taking her passion for human rights and economic development to the United Nations Office for Disarmament Affairs.',
    imageUrl: news3,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
]

export default function RelatedArticles() {
  return (
    <div className="py-24 bg-neutral-pearl-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-balance text-heading">
            More Moments that Matter
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-start">
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
          ))}
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image';

export default function CardLinkList({header, image, content, footer}) {
  return (
    <div className="divide-y divide-neutral-pewter/30 overflow-hidden rounded-lg bg-white shadow-sm not-prose my-8">
      { image && <div className="">
        <Image src={image} alt={header} className="w-full aspect-video object-cover" />
      </div> }
      { header && <div className="px-4 py-5 sm:px-6">
        <h2 className="text-xl font-bold leading-tight text-body">{header}</h2>
      </div> }
      <div className="divide-y divide-neutral-pewter/30">
        {content.map((item) => (
          <div key={item.title}>
            <a href={item.link} target="_blank" rel="noopener" className="block px-4 py-3 sm:px-6 text-primary-cuny-blue hover:bg-primary-sky/10 leading-tight">{item.title}</a>
          </div>
        ))}
      </div>
      { footer && <div className="px-4 py-4 sm:px-6 text-sm">
        {footer}
      </div> }
    </div>
  )
}
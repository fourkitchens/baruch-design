import Image from "next/image";

export default function TestimonialCard({testimonial}) {
  return (
    <figure className="rounded-lg bg-neutral-pearl p-8 text-sm/6">
      <blockquote className="text-body text-xl font-medium">
        <p>{`"${testimonial.body}"`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image src={testimonial.author.imageUrl} alt={testimonial.author.name} className="size-14 rounded-full bg-white" />
        <div className="flex flex-col gap-1 leading-none">
          <div className="font-semibold text-body">{testimonial.author.name}</div>
          <div className="text-body/80">{testimonial.author.major}</div>
          <div className="text-body/80">{testimonial.author.gradYear}</div>
        </div>
      </figcaption>
    </figure>
  )
}
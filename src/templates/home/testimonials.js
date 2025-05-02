import image1 from "@/assets/images/zicklin/0BB458E3-C383-4F4D-9302-41B17E7AB4BA.png";
import image2 from "@/assets/images/zicklin/962710A5-620E-4E61-9C4B-038723E41B4F.png";
import image3 from "@/assets/images/zicklin/A89C6DD4-E232-40CC-967A-005FCDA35F37.png";
import image4 from "@/assets/images/zicklin/F0B5971F-01A2-47E8-BAB2-15B12B55143F.png";
import image5 from "@/assets/images/137DC069-2388-4979-AFB8-3590D00B1617.png";
import Image from "next/image";

const testimonials = [
  {
    body: 'Amazing faculty support. Always there when I needed guidance or advice.',
    author: {
      name: 'Jordan Lee',
      major: 'Marketing',
      gradYear: '2026',
      imageUrl: image1,
    },
  },
  {
    body: 'A transformative experience that pushed me out of my comfort zone and helped me grow in ways I never imagined. I gained confidence, honed essential skills, and built friendships that will last a lifetime.',
    author: {
      name: 'Priya Nair',
      major: 'Computer Science',
      gradYear: '2023',
      imageUrl: image2,
    },
  },
  {
    body: 'Practical, hands-on learning that bridged theory and real-world experience. Every assignment felt purposeful, and I left each class knowing I was building skills that truly mattered.',
    author: {
      name: 'Carlos Mendes',
      major: 'Finance',
      gradYear: '2025',
      imageUrl: image4,
    },
  },
  {
    body: 'This program changed my path. I found my passion and a career I love.',
    author: {
      name: 'Aisha Thompson',
      major: 'Public Affairs',
      gradYear: '2022',
      imageUrl: image3,
    },
  },
  {
    body: 'Supportive, challenging, and inspiring. I left feeling truly prepared.',
    author: {
      name: 'Derek Wu',
      major: 'Media Studies',
      gradYear: '2027',
      imageUrl: image5,
    },
  },
]

export default function Testimonials() {
  return (
    <div className="bg-primary-cuny-blue py-24 sm:py-32">
      <div className="max-width-wrapper">

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-center text-[180px] leading-[150px] uppercase font-semibold font-field-gothic text-white text-shadow-lg mb-4">
            Real Stories, {' '}
            <span className="text-secondary-chartreuse">Real Impact</span>
          </h2>
          <p className="text-center text-white/80 text-2xl font-semibold">Discover how our programs have shaped the lives and careers of students and alumni. These personal stories highlight the real-world impact of their experiences—and the lasting connections they've built along the way.
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.author.name}-${index}`} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-lg bg-neutral-pearl p-8 text-sm/6">
                    <blockquote className="text-body text-xl font-medium">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      {/* <img alt="" src={testimonial.author.imageUrl} className="size-14 rounded-full bg-white" /> */}
                      <Image src={testimonial.author.imageUrl} alt={testimonial.author.name} className="size-14 rounded-full bg-white" />
                      <div className="flex flex-col gap-1 leading-none">
                        <div className="font-semibold text-body">{testimonial.author.name}</div>
                        <div className="text-body/80">{testimonial.author.major}</div>
                        <div className="text-body/80">Class of {testimonial.author.gradYear}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
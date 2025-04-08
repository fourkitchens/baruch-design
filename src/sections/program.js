import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Undergraduate Admissions Information and Major Declaration",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Public Affairs Learning Goals",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "The Hagedorn Internship",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

const courses = [
  {
    code: "ACC 2101",
    title: "Principles of Accounting",
    credits: 3
  },
  {
    code: "ACC 3202",
    title: "Accounting Information Systems",
    credits: 3
  },
  {
    code: "BPL 5100",
    title: "Business Policy",
    credits: 3
  },
  {
    code: "BUS 2000 (formerly BUS 1011)",
    title: "Business Fundamentals: The Contemporary Business Landscape",
    credits: 3
  },
  {
    code: "CIS 2200",
    title: "Introduction to Information Systems and Technology",
    credits: 3
  },
  {
    code: "FIN 3000",
    title: "Principles of Finance",
    credits: 3
  },
  {
    code: "LAW 1101",
    title: "Fundamentals of Business Law",
    credits: 3
  },
  {
    code: "MKT 3000",
    title: "Marketing Foundations",
    credits: 3
  },
  {
    code: "MGT 3120",
    title: "Fundamentals of Management",
    credits: 3
  },
  {
    code: "OPM 3000",
    title: "Service Operations Management",
    credits: 3
  }
]

const Table = () => {
  return (
    <table className="w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-base font-semibold text-gray-900 sm:pl-3">
            Course Code
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
            Course Title
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
            Credits
          </th>
        </tr>
      </thead>
      <tbody className="bg-bg-light">
        {courses.map((course) => (
          <tr key={course.code} className="even:bg-neutral-pearl-dark">
            <td className="py-4 pr-3 pl-4 text-base font-medium text-gray-900 sm:pl-3">
              {course.code}
            </td>
            <td className="px-3 py-4 text-base text-gray-900">{course.title}</td>
            <td className="px-3 py-4 text-base text-gray-900">{course.credits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export default function Program() {
  return (
    <div className="overflow-hidden bg-neutral-pearl py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-lg/7 font-semibold text-neutral-charcoal">Academics</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl">
            The Bachelor of Science in Public Affairs (BSPA)
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-neutral-charcoal">
          The Bachelor of Science in Public Affairs is a degree for students passionate about making a difference in the world. We offer hands-on, interdisciplinary classes that give you the analytic and advocacy skills you need to work for positive change on issues that matter to you — such as poverty, immigration reform, climate change, educational inequality, and much, much more.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-heading">Academic Advisement</h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
              vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
              erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
              sed amet vitae sed turpis id.
            </p>
            <p className="mt-8 text-base/7 text-gray-600">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
              fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
              adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-heading">Bachelor of Science in Public Affairs Degree Details
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10 !space-y-0">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 hover:bg-neutral-pearl-dark transition-all py-6 px-2">
                      <span className="text-lg/7 font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2">
                    <Table />
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
          
        </section>
      </div>
    </div>
  )
}

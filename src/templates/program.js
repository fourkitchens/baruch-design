import programs from "@/data/programs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import heroImage from "@/assets/images/599827A7-4B42-4E6A-80AF-69EFB8A09EC3.png"
import clsx from "clsx";
import sampleImage from "@/assets/images/students_2265_hor.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBuildingColumns } from '@fortawesome/pro-solid-svg-icons'

const breadcrumbData = [
  { name: 'Programs', href: '#', current: false },
]

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

const ProgramDetails = () => {
  const programDetails = [
    {
      term: "School",
      description: "Weissman School of Arts and Sciences",
      url: "#"
    },
    {
      term: "Degree Type:",
      description: "Major"
    },
    {
      term: "Degree Outcome:", 
      description: "Bachelor of Arts"
    },
    {
      term: "Modality:",
      description: "In-Person"
    }
  ];
  
  return (
    <div className="rounded-sm px-8 py-6 mt-12 bg-neutral-pearl text-neutral-charcoal shadow-md">
      <h2 className="text-xl font-semibold mb-4 uppercase">Program Details</h2>
      <dl className="grid grid-cols-2 gap-4">
        {programDetails.map((detail, index) => (
          <div key={index}>
            <dt className="block font-bold uppercase text-sm mb-1">
              {detail.term}
            </dt>
            <dd className="block">
              {detail.url ? (
                <a href={detail.url} className="text-primary-cuny-blue text-xl link link-neutral-pearl-bg leading-none">{detail.description}</a>
              ) : (
                <span className=" text-xl">{detail.description}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 mb-4">
        <a href="/apply" className="bg-secondary-tangerine text-white ring-1 ring-secondary-tangerine px-4 py-2 font-bold rounded-sm transition-all">
          Request More Information
        </a>
      </p>
    </div>   
  )
}

export default function Program() {
  return (
    <>
      <Header />
      <div className="relative bg-neutral-slate text-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className={clsx(
            "mx-auto max-w-2xl",
            "py-8 px-6",
            "md:py-16",
            "lg:col-span-7 lg:pb-32 lg:pt-10 lg:px-0 lg:max-w-lg lg:mx-0 lg:mt-24",
            "xl:col-span-6",
          )}>
            <Breadcrumbs pages={breadcrumbData} className="[--text-color:var(--color-white)] [--link-color:var(--color-white)] [--link-hover-color:var(--color-white)] [--link-current-color:var(--color-white)] [--link-current-hover-color:var(--color-white)]" />

            <h1 className="text-white text-6xl mb-6 font-bold text-balance mt-4">English Major</h1>
            <p className="text-white/85 text-2xl">The English BA at Baruch College immerses students in literature, language, and writing—building skills in communication and cultural insight for diverse careers.
            </p>
            <ProgramDetails />
            
          </div>
          
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image src={heroImage} alt="Photo" className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
          </div>
        </div>
      </div>
      
      
      <LayoutPage wide={true}>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl prose lg:prose-lg">
            <h1>A Foundation in Literature. A Future in Any Field.</h1>
            <p className="lead">The BA in English at Baruch College explores language, storytelling, and critical thinking through a liberal arts lens. Students study diverse texts across time and cultures, developing strong analytical and communication skills for a wide range of careers.</p>

            <p>Whether pursuing creative writing, literary analysis, or professional communication, English majors gain a flexible, intellectually rich foundation that supports diverse career paths—from education and publishing to law, business, and beyond. The program encourages independent thought, cultural awareness, and strong writing—qualities that empower students to thrive in graduate study or the workplace.</p>
          </div>

          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8 prose lg:prose-lg">
              <h2>Learning Outcomes</h2>
              <p>Graduates of the English major will be able to:</p>
              <ul>
                <li>Analyze and interpret a wide range of literary texts across periods and genres.</li>
                <li>Demonstrate proficiency in critical thinking and articulate complex ideas effectively.</li>
                <li>Conduct scholarly research and present findings coherently.</li>
                <li>Understand the historical and cultural contexts of literature.</li>
                <li>Apply writing skills in various professional and creative contexts.</li>
              </ul>
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

            <div className="lg:pr-8 prose lg:prose-lg">
              <h2>Concentration Options</h2>
              <p>Students may choose to concentrate in:</p>
              <ul>
                <li>Literature</li>
                <li>Creative Writing</li>
                <li>Professional Writing</li>
              </ul>
            </div>
            
          </section>

          <section className="mt-20 prose lg:prose-lg">
            <h2>Requirements & Curriculum</h2>
            <h3>Prerequisites</h3>
            <p>Students must complete introductory courses in English literature and composition before declaring the major.</p>

            <h3>Required Courses (Total Credits: 24)</h3>
            <ul>
              <li>ENG 2100: Writing I (3 credits)</li>
              <li>ENG 2150: Writing II (3 credits)</li>
              <li>ENG 3010: Introduction to Literary Studies (3 credits)</li>
              <li>ENG 3020: British Literature I (3 credits)</li>
              <li>ENG 3030: American Literature I (3 credits)</li>
              <li>ENG 4900: Senior Seminar (3 credits)</li>
              <li>Two additional upper-level English courses (6 credits)</li>
            </ul>

            <h3>Elective Courses (Total Credits: 12)</h3>
            <p>Students select four elective courses, allowing exploration of diverse literary topics and writing styles. Electives enable students to tailor their studies to specific interests, such as contemporary literature, poetry, or digital media.</p>

            <p>Example Electives:</p>
            <ul>
              <li>ENG 3200: Modern Poetry (3 credits)</li>
              <li>ENG 3300: Creative Writing Workshop (3 credits)</li>
              <li>ENG 3400: Literature and Film (3 credits)</li>
              <li>ENG 3500: Digital Narratives (3 credits)</li>
            </ul>

            <h2>Degree Outcomes</h2>
            <p>An English degree equips students with versatile skills applicable to various careers, including:</p>
            <ul>
              <li>Publishing and Editing</li>
              <li>Journalism and Media</li>
              <li>Education and Academia</li>
              <li>Public Relations and Marketing</li>
              <li>Law and Public Policy</li>
            </ul>

            <p>Alumni have pursued advanced degrees and established careers in diverse fields, showcasing the program's adaptability and strength.</p>

            <section className="mt-8 not-prose bg-white border border-neutral-pearl-dark py-8 px-8 rounded-sm space-y-4">
              <h2 className="text-xl font-semibold mb-4 uppercase text-heading">Program Contact</h2>

              <p><strong>Department of English</strong><br/>646-312-3910</p>

              <p><strong>Professor Mary Mcglynn</strong><br/>646-312-3980 Ext 3961</p>

              <p><strong>Professor Stephanie Hershinow</strong><br/>646-312-4009</p>
            </section>

          </section>

          <section className="mt-20">
            <h2 className="text-3xl font-semibold mb-4 uppercase text-heading">Related Programs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 3)
              .map((program) => (
                <li key={program.name} className="flex flex-col">
                  <Image src={sampleImage} alt="Sample Image" className="object-cover rounded-lg aspect-square mb-4 order-0" />
                  <h3 className="text-2xl font-bold text-balance order-2">
                      <a href={program.url} className="link leading-snug font-semibold text-heading">{program.name}</a>
                    </h3>
                    <p className="order-1">
                      {program.undergraduate && (
                        <div className="uppercase inline-flex items-center gap-2 font-semibold text-xs"><FontAwesomeIcon icon={faGraduationCap} className="size-4 text-body/70 relative -top-[1px]" />Undergraduate</div>
                      )}
                      {program.graduate && (
                        <div className="uppercase inline-flex items-center gap-2 font-semibold text-xs"><FontAwesomeIcon icon={faBuildingColumns} className="size-3 text-body/70 relative -top-[1px]" />Graduate</div>
                      )}
                    </p>
                    <p className="order-3 text-xs mt-6">
                      {program.major && (
                        <div className="font-semibold uppercase">Major</div>
                      )}
                      {program.minor && (
                        <div className="font-semibold uppercase">Minor</div>
                      )}
                    </p>
                  </li>
                ))}
            </div>
          </section>
        </div>

      </LayoutPage>
      <Footer />
    </>
  );
}
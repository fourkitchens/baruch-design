import programs from "@/data/programs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import heroImage from "@/assets/images/599827A7-4B42-4E6A-80AF-69EFB8A09EC3.png"
import clsx from "clsx";
import sampleImage from "@/assets/images/students_2265_hor.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBuildingColumns } from '@fortawesome/pro-solid-svg-icons'
import Button from "@/components/button";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import HeroBigSideBySide from "@/components/heroBigSideBySide";

const breadcrumbData = [
  { name: 'Programs', href: '#', current: false },
]

const courses2 = [
  {
    title: "ENG 2100: Writing I",
    description: "Develop fundamental writing skills through composition and analysis. Learn to craft clear, effective prose while exploring various writing styles and techniques.",
    credits: 3
  },
  {
    title: "ENG 2150: Writing II",
    description: "Build upon Writing I foundations with advanced composition techniques. Focus on research-based writing and critical analysis of complex texts.",
    credits: 3
  },
  {
    title: "ENG 3010: Introduction to Literary Studies",
    description: "Explore the fundamentals of literary analysis and criticism. Study various theoretical approaches to literature and develop critical reading skills.",
    credits: 3
  },
  {
    title: "ENG 3020: British Literature I",
    description: "Survey of British literature from its origins through the 18th century. Examine major works, authors, and literary movements that shaped British literary tradition.",
    credits: 3
  },
  {
    title: "ENG 3030: American Literature I",
    description: "Study the development of American literature from colonial times through the Civil War. Analyze major works and their cultural and historical contexts.",
    credits: 3
  },
  {
    title: "ENG 4900: Senior Seminar",
    description: "Capstone course integrating knowledge and skills from previous coursework. Complete a substantial research project or creative work in your area of interest.",
    credits: 3
  },
  {
    title: "Additional Upper-Level English Courses",
    description: "Choose from a variety of advanced English courses to complete your degree requirements. Options may include specialized topics in literature, writing, or cultural studies.",
    credits: 6
  }
]

const ProgramDetails = () => {
  const programDetails = [
    {
      term: "School",
      description: "Weissman School of Arts and Sciences",
      url: "#"
    },
    {
      term: "Degree Type:",
      description: "Major/Minor"
    },
    {
      term: "Degree Outcome:", 
      description: "Bachelor of Arts"
    },
    {
      term: "Modality:",
      description: "In-Person, Hybrid, Online"
    },
    {
      term: "Start Term",
      description: "Spring or Fall"
    },
    {
      term: "Credits",
      description: "42 (45 with internship)"
    },
    {
      term: "Duration",
      description: "2 Years Average (full-time)"
    }
  ];
  
  return (
    <div className="rounded-sm px-8 py-6 mt-12 bg-neutral-pearl text-neutral-charcoal shadow-md">
      <h2 className="text-xl font-semibold mb-4 uppercase">Program Details</h2>
      <dl className="grid grid-cols-2 gap-4">
        {programDetails.map((detail, index) => (
          <div key={index} className={index === 0 ? "col-span-2" : ""}>
            <dt className="block font-bold uppercase text-sm mb-1">
              {detail.term}
            </dt>
            <dd className="block">
              {detail.url ? (
                <a href={detail.url} className="text-primary-cuny-blue text-xl link link-neutral-pearl-bg leading-none">{detail.description}</a>
              ) : (
                <span className="text-xl leading-none">{detail.description}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 mb-4">
        <Button href="/apply" type="tangerine">
          Request More Information
        </Button>
      </p>
    </div>   
  )
}

export default function Program() {
  return (
    <>
      <Header />
      <HeroBigSideBySide
        image={heroImage}
        title="English Major"
        content="The English BA at Baruch College immerses students in literature, language, and writing—building skills in communication and cultural insight for diverse careers."
        backgroundColor="bg-neutral-slate"
        titleClassName="text-white text-6xl mb-6 font-bold text-balance mt-4"
        contentClassName="text-white/85 text-2xl"
        breadcrumbs={<Breadcrumbs pages={breadcrumbData} className="[--text-color:var(--color-white)] [--link-color:var(--color-white)] [--link-hover-color:var(--color-white)] [--link-current-color:var(--color-white)] [--link-current-hover-color:var(--color-white)]" />}
        additionalContent={<ProgramDetails />}
      />

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
            <dl className="mt-16 divide-y divide-gray-900/10 !space-y-0">
              {courses2.map((course) => (
                <Disclosure key={course.title} as="div" className="">
                  <dt className="!mt-0">
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 hover:bg-neutral-pearl-dark transition-all py-6 px-2">
                      <span className="text-lg/7 font-semibold">{course.title}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2">
                    <p>{course.description}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>

            <h3>Elective Courses (Total Credits: 12)</h3>
            <p>Students select four elective courses, allowing exploration of diverse literary topics and writing styles. Electives enable students to tailor their studies to specific interests, such as contemporary literature, poetry, or digital media.</p>

            <p>Example Electives:</p>
            <dl className="mt-16 divide-y divide-gray-900/10 !space-y-0">
              {courses2.map((course) => (
                <Disclosure key={course.title} as="div" className="">
                  <dt className="!mt-0">
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 hover:bg-neutral-pearl-dark transition-all py-6 px-2">
                      <span className="text-lg/7 font-semibold">{course.title}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2">
                    <p>{course.description}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>

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

            <h2>Accreditation</h2>
            <p>The English major is accredited by the Association of American Colleges and Universities (AACU).</p>

            <section className="bg-primary-cuny-blue text-white not-prose p-8 rounded-sm">
              <h2 className="text-white text-3xl font-semibold mb-4">Ready to embark on a journey of literary exploration and professional development? </h2>
              <p className="text-white/85 text-xl">Apply to the English major at Baruch College today.</p>

              <div className="mt-8 not-prose flex flex-row gap-4">
                <Button href="/apply" type="tangerine">
                  Apply Now
                </Button>
                <Button href="/apply" type="tangerine">
                  Request More Information
                </Button>
                <Button href="/apply" type="tangerine">
                  Attend an Info Session
                </Button>
              </div>
            </section>

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
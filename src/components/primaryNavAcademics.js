import NavSection from './NavSection';
import mission from "@/assets/images/gettyimages-2094337676-2048x2048.jpg"
import knowUs from "@/assets/images/UNA-USA-Fellow_.gif"
import programsImage from "@/assets/images/admissions-trim.jpg"
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCompass } from '@fortawesome/pro-solid-svg-icons'

const sections = [
  {
    header: "Shape Your Future Here",
    image: programsImage,
    items: [
      {
        title: "Programs and Areas of Study",
        url: "/programs"
      },
      {
        title: "Departments",
        url: "#"
      },
      {
        title: "Undergraduate Degrees and Programs",
        url: "#"
      },
      {
        title: "Graduate and Executive Degrees and Programs",
        url: "#"
      },
      {
        title: "Baruch Honors",
        url: "#"
      },
        
    ]
  },
  {
    header: "Helping You Succeed",
    image: mission,
    items: [
      {
        title: "Academic Support for Students",
        url: "#"
      },
      {
        title: "Student Academic Consulting Center (SACC)",
        url: "#"
      },
      {
        title: "Writing Center",
        url: "#"
      },
      {
        title: "Computing Services",
        url: "#"
      },
    ]
  },
  {
    header: "Research and Innovation",
    image: knowUs,
    items: [
      {
        title: "Research",
        url: "#"
      },
      {
        title: "Office of Research Compliance and Outreach (ORCO)",
        url: "#"
      },
      {
        title: "Office of Sponsored Programs and Research (SPAR)",
        url: "#"
      },
    ]
  }
];

export default function PrimaryNavAcademics() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10">
      <div className="grid grid-cols-4 gap-x-6 sm:gap-x-8 divide-x divide-neutral-dove px-6 py-10 pb-0 lg:px-10">
        {sections.map((section) => (
          <NavSection 
            key={section.header}
            header={section.header}
            image={section.image}
            items={section.items}
            className="pe-8"
            maxItems={50}
          />
        ))}
        <div className="space-y-6">
          <div className="bg-neutral-pearl rounded-sm p-6 pe-4">
            <h3 className="text-base/6 leading-none text-body mb-4 uppercase font-bold flex items-center">
              <FontAwesomeIcon icon={faBuildingColumns} className="mr-2 size-4 relative -top-[2px] opacity-60" />
              Schools
            </h3>
            <ul className="text-lg">
              <li className="py-2 leading-tight">
                <a href="/zicklin" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-bg")}>
                  Zicklin School of Business
                </a>
              </li>
              <li className="py-2 leading-tight">
                <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-bg")}>
                  Marxe School of International Affairs
                </a>
              </li>
              <li className="py-2 leading-tight">
                <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-bg")}>
                  Weissman School of Arts and Sciences
                </a>
              </li>
              <li className="py-2 leading-tight">
                <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-bg")}>
                  Baruch Online
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-pearl rounded-sm p-6 pe-4">
            <h3 className="text-base/6 leading-none text-body mb-4 uppercase font-bold flex items-center">
              <FontAwesomeIcon icon={faCompass} className="mr-2 size-4 relative -top-[2px] opacity-60" />
              Explore Your Options
            </h3>
            <ul className="text-lg">
              <li className="py-2 leading-tight">
                <a href="#" className={clsx("font-medium text-primary-cuny-blue link link-neutral-pearl-bg")}>
                  Courses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary-thistle text-neutral-charcoal font-medium px-10 py-3 rounded-sm rounded-t-none">
        <p>Baruch’s academic programs blend real-world skills with scholarly rigor, empowering students to thrive in their careers, communities, and beyond.</p>
      </div>
    </div>
  )
}

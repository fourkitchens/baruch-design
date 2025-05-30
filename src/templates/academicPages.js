import programs from "@/data/programs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import sampleImage from "@/assets/images/students_2265_hor.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBuildingColumns } from '@fortawesome/pro-solid-svg-icons'
import Button from "@/components/button";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import SectionBanner from "@/components/sectionBanner";
import PageTitle from "@/components/pageTitle";
import CardLinkList from '../components/cardLinkList';

const breadcrumbData = [
  { name: 'Academic Departments', href: '#', current: false },
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

const quickLinks = {
  header: 'Quick Links',
  image: sampleImage,
  content: [
    { title: 'Student Resources', link: '#' },
    { title: 'Academic Calendar', link: '#' },
    { title: 'Course Catalog', link: '#' },
    { title: 'Library Services', link: '#' },
  ],
  footer: 'Last updated: March 2024'
}

export default function AcademicPages() {
  return (
    <>
      <Header />
      <SectionBanner organizationalDescriptor="Stan Ross Department of" title="Accountancy" />
      
      <LayoutPage wide={true}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>Where Accounting Expertise Meets Real-World Impact</PageTitle>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0 prose lg:prose-lg col-span-2">
          
            <p>The Stan Ross Department of Accountancy at the Zicklin School of Business offers comprehensive programs designed to prepare students for successful careers in accounting and taxation. The department emphasizes intellectual competence, technical knowledge, and ethical sensibility through high-quality academic programs and innovative research.</p>

            <h2>Mission & Goals</h2>
            <ul>
              <li>Operate undergraduate, master’s, and doctoral programs in accountancy.</li>
              <li>Provide accounting knowledge to students majoring in other disciplines.</li>
              <li>Engage in high-quality research serving students, academia, and the business community.</li>
              <li>Develop students’ understanding of the business and regulatory environment.</li>
              <li>Prepare students for positions of higher responsibility in accounting.</li>
            </ul>
          </div>

          <div className="col-span-1">
            <CardLinkList header={quickLinks.header} image={quickLinks.image} content={quickLinks.content} footer={quickLinks.footer} />
            
          </div>
        </div>

      </LayoutPage>
      <Footer />
    </>
  );
}
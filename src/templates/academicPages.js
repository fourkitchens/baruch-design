import programs from "@/data/programs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import sampleImage from "@/assets/images/students_2265_hor.jpg";
import SectionBanner from "@/components/sectionBanner";
import CardLinkList from '../components/cardLinkList';
import clsx from 'clsx';
import heroImage from "@/assets/images/academics/a82b1571-0d46-4875-9da6-658d25d9980d.png"
import AccordionGroup from "@/components/accordionGroup";


const breadcrumbData = [
  { name: 'Academic Departments', href: '#', current: false },
]

const quickLinks = {
  header: 'Quick Links',
  image: sampleImage,
  content: [
    { title: 'Our Commitment to Students and the Profession', link: '#our-commitment-to-students-and-the-profession' },
    { title: 'Program Highlights', link: '#program-highlights' },
    { title: 'Explore our programs', link: '#explore-our-programs' },
  ],
  footer: 'Last updated: March 2024'
}

const programsData = [
  {
    question: "Undergraduate Programs",
    content:
      <div>
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/undergraduate/majors/accounting/">BBA in Accounting</a></p>
        <p>Provides a foundation in general business practice, and an understanding of accounting concepts and theory to prepare you for financial and accounting positions in private industries, nonprofit organizations, and government.</p>
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/undergraduate/majors/accounting/4-1-bachelorsmasters/">BBA/MS Path&nbsp;to&nbsp;CPA&nbsp;</a></p>
        <p>If you are a <strong>current</strong>&nbsp;Baruch College undergraduate student, you can significantly shorten the time necessary to complete the Master’s degree by getting waivers of MS requirements based on undergraduate courses taken. Students must apply separately to the MS program in the final semester of their senior year of undergraduate study. Please see Graduate Admissions for deadline applications.</p>
      </div>
  },
  {
    question: "Masters of Science Programs",
    content:
      <div>
        <p><a href="https://zicklin.baruch.cuny.edu/academic-programs/graduate/ms/accountancy/">MS in Accountancy</a></p>
        <p>Well-suited if you have a bachelor’s degree in accounting and other business areas and desire to pursue a career in public accountancy. Graduates of this program satisfy the educational requirements for CPA licensure in New York State.</p>
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/graduate/ms/taxation/">MS in Taxation</a></p>
        <p>You will receive the advanced technical and research skills necessary to operate effectively as a tax professional and industry leader. The program also gives you the necessary background to interpret new developments and properly remain in the vanguard of the profession.</p>
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/undergraduate/majors/accounting/4-1-bachelorsmasters/">BBA/MS Path&nbsp;to&nbsp;CPA&nbsp;</a></p>
        <p>If you are a <strong>current</strong>&nbsp;Baruch College undergraduate student, you can significantly shorten the time necessary to complete the Master’s degree by getting waivers of MS requirements based on undergraduate courses taken.</p>
      </div>
  },
  {
    question: "MBA in Accountancy",
    content:
      <div>
        <p><a href="https://zicklin.baruch.cuny.edu/academic-programs/graduate/ms/accountancy/">MBA in Accountancy</a></p>
        <p>Designed for students with baccalaureate degrees in fields other than accounting, the MBA Accountancy degree enables you to acquire knowledge and develop competence in overall management as you gain a foundation in accounting theory and concepts.</p>
      </div>
  },
  {
    question: "PhD in Accountancy",
    content:
      <div class="accordion-content-inner">
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/doctoral/areas-of-study/accountancy/">PhD in Accountancy</a></p>
        <p>Designed to teach future accounting researchers and educators conceptual and empirical developments and applications, plus an in-depth study of the different fields in accounting.</p>
      </div>
  },
]

export default function AcademicPages() {
  return (
    <>
      <Header />
      <SectionBanner organizationalDescriptor="Stan Ross Department of" title="Accountancy" />

      <div className="relative bg-primary-midtown-blue text-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className={clsx(
            "mx-auto max-w-2xl",
            "py-8 px-6",
            "md:py-16",
            "lg:col-span-7 lg:pb-32 lg:pt-10 lg:px-0 lg:max-w-lg lg:mx-0 lg:mt-24",
            "xl:col-span-6",
          )}>
            <Breadcrumbs pages={breadcrumbData} className="[--text-color:var(--color-white)] [--link-color:var(--color-white)] [--link-hover-color:var(--color-white)] [--link-current-color:var(--color-white)] [--link-current-hover-color:var(--color-white)]" />

            <h1 className="text-white text-5xl mb-6 font-bold text-balance mt-4">Where Accounting Expertise Meets Real-World Impact</h1>
            <p className="text-white/85 text-xl">The Stan Ross Department of Accountancy at the Zicklin School of Business offers comprehensive programs designed to prepare students for successful careers in accounting and taxation. The department emphasizes intellectual competence, technical knowledge, and ethical sensibility through high-quality academic programs and innovative research.</p>
            
          </div>
          
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image src={heroImage} alt="Photo" className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
          </div>
        </div>
      </div>
      
      <LayoutPage wide={true}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <div className="mx-auto max-w-4xl lg:mx-0 prose lg:prose-lg col-span-2">
          
            <h2 id="our-commitment-to-students-and-the-profession">Our Commitment to Students and the Profession</h2>
            <h3>From foundational programs to forward-thinking research, our goals shape a robust, ethical, and future-ready accounting education.</h3>
            <ul>
              <li>Operate undergraduate, master’s, and doctoral programs in accountancy.</li>
              <li>Provide accounting knowledge to students majoring in other disciplines.</li>
              <li>Engage in high-quality research serving students, academia, and the business community.</li>
              <li>Develop students’ understanding of the business and regulatory environment.</li>
              <li>Prepare students for positions of higher responsibility in accounting.</li>
            </ul>

            <section className="mt-16 not-prose bg-primary-midtown-blue text-white p-8 rounded-sm">
              <h2 className="text-white text-3xl leading-none mb-6 font-bold text-balance text-center mt-4" id="program-highlights">Program Highlights</h2>
              <ul className="not-prose grid grid-cols-2 leading-tight font-sans-condensed text-2xl">
                <li className="border-r-2 border-b-2 border-white/30  p-4">Ranked #5 nationally among accounting programs and #2 among public institutions by College Factual.</li>
                <li className="border-b-2 border-white/30 p-4">Accredited by AACSB International, ensuring high standards in accounting education.
                </li>
                <li className="border-r-2 border-white/30 p-4">Offers internship courses (e.g., ACC 5100) providing practical experience in accounting workplaces.</li>
                <li className="p-4">Faculty actively engaged in research, contributing to advancements in accounting practices. </li>
              </ul>
            </section>

            <h2 id="explore-our-programs">Explore our programs</h2>
            <AccordionGroup data={programsData} />

          </div>

          <div className="col-span-1 min-h-[1000vh]">
            <CardLinkList header={quickLinks.header} image={quickLinks.image} content={quickLinks.content} footer={quickLinks.footer} className="sticky top-4" />
            
          </div>
        </div>

      </LayoutPage>
      <Footer />
    </>
  );
}
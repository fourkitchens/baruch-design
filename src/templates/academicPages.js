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
import Behar from "@/assets/images/profiles/behar.jpg"
import Milch from "@/assets/images/profiles/milch.jpg"
import SchwartzAnne from "@/assets/images/profiles/Schwartz-Anne.jpg"
import SlavinDennis from "@/assets/images/profiles/Slavin-Dennis.png"
import Wollman from "@/assets/images/profiles/Wollman.jpg"
import ProfileCard from "@/components/profileCard";
import news1 from '@/assets/images/news1.gif';
import news2 from '@/assets/images/news2.gif';
import news3 from '@/assets/images/UNA-USA-Fellow_.gif';
import PostCard from '@/components/postCard';
import HeroBigSideBySide from "@/components/heroBigSideBySide";

const breadcrumbData = [
  { name: 'Academic Departments', href: '#', current: false },
]

const posts = [
  {
    id: 1,
    title: "Baruch and SUNY Broome Launch Seamless Transfer Program for Business Students",
    href: '#',
    description:
      "A new 2+2 agreement guarantees SUNY Broome business students admission to Baruch's Zicklin School of Business if they meet academic requirements.",
    imageUrl: news1,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
  {
    id: 2,
    title: "Baruch Team Shines with Second Place Win at National Deloitte Challenge",
    href: '#',
    description:
      "A standout team from Baruch's Zicklin School of Business claimed second place in Deloitte's national FanTAXtic competition—marking an impressive debut on the national stage.",
    imageUrl: news2,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
  {
    id: 3,
    title: "Baruch Senior Awarded Prestigious UN Fellowship to Advance Global Change",
    href: '#',
    description:
      "Baruch senior Adriana Lopez-Tavares was awarded the prestigious UNA-USA Fellowship, taking her passion for human rights and economic development to the United Nations Office for Disarmament Affairs.",
    imageUrl: news3,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
]

const quickLinks = {
  header: 'Quick Links',
  image: sampleImage,
  content: [
    { title: 'Our Commitment to Students and the Profession', link: '#our-commitment-to-students-and-the-profession' },
    { title: 'Program Highlights', link: '#program-highlights' },
    { title: 'Explore our programs', link: '#explore-our-programs' },
    { title: 'Meet Our Faculty', link: '#faculty' },
    { title: 'News', link: '#news' },
    { title: 'Contact', link: '#contact' },
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
        <p>If you are a <strong>current</strong>&nbsp;Baruch College undergraduate student, you can significantly shorten the time necessary to complete the Master's degree by getting waivers of MS requirements based on undergraduate courses taken. Students must apply separately to the MS program in the final semester of their senior year of undergraduate study. Please see Graduate Admissions for deadline applications.</p>
      </div>
  },
  {
    question: "Masters of Science Programs",
    content:
      <div>
        <p><a href="https://zicklin.baruch.cuny.edu/academic-programs/graduate/ms/accountancy/">MS in Accountancy</a></p>
        <p>Well-suited if you have a bachelor's degree in accounting and other business areas and desire to pursue a career in public accountancy. Graduates of this program satisfy the educational requirements for CPA licensure in New York State.</p>
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/graduate/ms/taxation/">MS in Taxation</a></p>
        <p>You will receive the advanced technical and research skills necessary to operate effectively as a tax professional and industry leader. The program also gives you the necessary background to interpret new developments and properly remain in the vanguard of the profession.</p>
        <p><a href="http://zicklin.baruch.cuny.edu/academic-programs/undergraduate/majors/accounting/4-1-bachelorsmasters/">BBA/MS Path&nbsp;to&nbsp;CPA&nbsp;</a></p>
        <p>If you are a <strong>current</strong>&nbsp;Baruch College undergraduate student, you can significantly shorten the time necessary to complete the Master's degree by getting waivers of MS requirements based on undergraduate courses taken.</p>
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

const profileData = [
  {
    name: "Anne Swartz",
    title: "Professor",
    school: "Weissman School of Arts and Sciences",
    department: "Fine & Performing Arts",
    image: SchwartzAnne,
  },
  {
    name: "Katherine Behar",
    title: "Professor",
    school: "Weissman School of Arts and Sciences",
    department: "Fine & Performing Arts",
    image: Behar,
  },
  {
    name: "David Milch",
    title: "Distinguished Lecturer",
    school: "Weissman School of Arts and Sciences",
    department: "Fine & Performing Arts",
    image: Milch,
  },
  {
    name: "Dennis Slavin",
    title: "Distinguished Lecturer",
    school: "Weissman School of Arts and Sciences",
    department: "Fine & Performing Arts",
      image: SlavinDennis,
  },
  {
    name: "Elizabeth Wollman",
    title: "Professor",
    school: "Weissman School of Arts and Sciences",
    department: "Fine & Performing Arts",
    image: Wollman,
  },
  {
    name: "Susan Tenneriello",
    title: "Associate Professor",
    school: "Weissman School of Arts and Sciences",
    department: "Fine & Performing Arts",
  },
]

export default function AcademicPages() {
  return (
    <>
      <Header />
      <SectionBanner organizationalDescriptor="Stan Ross Department of" title="Accountancy" />

      <HeroBigSideBySide
        image={heroImage}
        title="Where Accounting Expertise Meets Real-World Impact"
        content="The Stan Ross Department of Accountancy at the Zicklin School of Business offers comprehensive programs designed to prepare students for successful careers in accounting and taxation. The department emphasizes intellectual competence, technical knowledge, and ethical sensibility through high-quality academic programs and innovative research."
        backgroundColor="bg-primary-midtown-blue"
        titleClassName="text-white text-5xl mb-6 font-bold text-balance mt-4"
        contentClassName="text-white/85 text-xl"
        breadcrumbs={<Breadcrumbs pages={breadcrumbData} className="[--text-color:var(--color-white)] [--link-color:var(--color-white)] [--link-hover-color:var(--color-white)] [--link-current-color:var(--color-white)] [--link-current-hover-color:var(--color-white)]" />}
      />
      
      <LayoutPage wide={true}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <div className="mx-auto max-w-4xl lg:mx-0 prose lg:prose-lg col-span-2">
          
            <h2 id="our-commitment-to-students-and-the-profession">Our Commitment to Students and the Profession</h2>
            <h3>From foundational programs to forward-thinking research, our goals shape a robust, ethical, and future-ready accounting education.</h3>
            <ul>
              <li>Operate undergraduate, master's, and doctoral programs in accountancy.</li>
              <li>Provide accounting knowledge to students majoring in other disciplines.</li>
              <li>Engage in high-quality research serving students, academia, and the business community.</li>
              <li>Develop students' understanding of the business and regulatory environment.</li>
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

            <h2 id="faculty">Meet Our Faculty</h2>
            <p>Our faculty members are thought leaders and practitioners who bring real-world expertise into the classroom.</p>
            <div className="grid grid-cols-3 gap-x-8 gap-y-16 mb-32">
              {profileData.map((profile) => (
                <ProfileCard key={profile.name} profile={profile} />
              ))}
            </div>

            <h2 className="mt-32" id="news">News</h2>
            <div className="not-prose grid grid-cols-3 gap-x-8 gap-y-16">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} compact={true} showDescription={false} />
              ))}
            </div>

            <section className="mt-16 not-prose bg-white border border-neutral-pearl-dark py-8 px-8 rounded-sm space-y-4" id="contact">
              <h2 className="text-xl font-semibold mb-4 uppercase text-heading">Stan Ross Department of Accountancy</h2>
              <p>One Bernard Baruch Way (Box B12-225)<br/>New York, NY 10010-5585</p>
              <p><strong>Phone:</strong> (646) 312-3090<br/><strong>Email:</strong> <a href="mailto:accountancy@baruch.cuny.edu" className="link">accountancy@baruch.cuny.edu</a></p>
            </section>
          </div>

          <div className="col-span-1">
            <CardLinkList header={quickLinks.header} image={quickLinks.image} content={quickLinks.content} footer={quickLinks.footer} className="sticky top-4" />
          </div>
        </div>

      </LayoutPage>
      <Footer />
    </>
  );
}
import photo from "@/assets/images/UNA-USA-Fellow_.gif";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import LayoutPage from "@/components/layoutPage";
import PageTitle from "@/components/pageTitle";
import SidebarNav from "@/components/sidebarNav";
import students from '@/assets/images/230621-Mario-Morgado-255.png';
import students2 from '@/assets/images/Baruch-students_NVC.jpg';
import athletics from '@/assets/images/2017CUNYACSeniors.webp';
import CardLinkList from "@/components/cardLinkList";
import Button from "@/components/button";

const breadcrumbData = []

const categories = [
  "Cost, Billing and Financial Support",
  "Building Community", 
  "Housing and Dining",
  "Activities and Involvement",
  "Wellness and Recreation",
  "Academics and Career Preparation",
  "Research",
  "Classes and Registration",
  "Safety and Concerns",
  "Transportation",
  "Technology"
]

const Card = ({title, description, cta}) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-8 flex flex-col">
      <h3 className="text-2xl font-bold leading-tight text-heading mb-4">{title}</h3>
      <p className="mb-8">{description}</p>
      <Button href={cta.link} className="mt-auto" type="skyOnWhite">{cta.text}</Button>
    </div>
  )
}

export default function CurrentStudents() {
  return (
    <div>
      <LayoutPage wide={true}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>Current students</PageTitle>
        </div>
        <article className="prose lg:prose-lg max-w-none mx-auto">
          <p className="lead">As a Baruch College student, you're part of a dynamic, driven community in the heart of New York City. This page is your starting point for accessing the tools, resources, and support that will help you succeed both inside and outside the classroom. Whether you're registering for classes, checking your financial aid status, connecting with an academic advisor, or exploring student services, you'll find everything you need to stay on track and make the most of your time at Baruch.</p>
          <p>Your Baruch experience goes beyond academics—it's about growing as a leader, building your network, and finding your voice. Get involved with student organizations, attend campus events, explore leadership programs, and take advantage of career development services designed to prepare you for what's next. No matter your goals, this site connects you to the opportunities and support that make Baruch a place where ambition meets action.</p>
        </article>
      </LayoutPage>

      <section className="bg-neutral-pearl-dark py-16">
        <div className="max-width-wrapper">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-center font-bold text-5xl text-heading mb-8">Top Clicks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="Academic Support" description="The Tutoring and Academic Engagement Center provides resources to help you in your classes. From tutoring to study habits to peer coaching, the center can help you be successful." cta={{text: "Find a tutor", link: "#"}} />
              <Card title="University Course Policies" description="Our new online student guide walks you through the rules and policies that apply to every course you take at UO, all in one location." cta={{text: "Learn more", link: "#"}} />
              <Card title="Experience Surveys" description="Your feedback is critical for evaluating and improving UO academic courses and programs for future Ducks. Fill out your surveys in DuckWeb by March 17." cta={{text: "Give feedback", link: "#"}} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-primary-cuny-blue py-16">
        <div className="max-width-wrapper">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-center font-bold text-5xl text-white mb-8">Academics and Career Preparation</h2>
            <p className="text-white mb-8">There are many resources available to help you be successful in your studies and career preparation. From academic advisors to tutors to career coaches, staff in offices across the university are available to help you identify your goals and create a plan for achieving them.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="Academic Support" description="The Tutoring and Academic Engagement Center provides resources to help you in your classes. From tutoring to study habits to peer coaching, the center can help you be successful." cta={{text: "Find a tutor", link: "#"}} />
              <Card title="University Course Policies" description="Our new online student guide walks you through the rules and policies that apply to every course you take at UO, all in one location." cta={{text: "Learn more", link: "#"}} />
              <Card title="Experience Surveys" description="Your feedback is critical for evaluating and improving UO academic courses and programs for future Ducks. Fill out your surveys in DuckWeb by March 17." cta={{text: "Give feedback", link: "#"}} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-primary-cuny-blue-dark py-16">
        <div className="max-width-wrapper">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-center font-bold text-5xl text-white mb-8">Classes and Registration</h2>
            <p className="text-white mb-8">There are many resources available to help you be successful in your studies and career preparation. From academic advisors to tutors to career coaches, staff in offices across the university are available to help you identify your goals and create a plan for achieving them.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardLinkList 
              header="Academics"
              content={[
                { title: "Student Academic Consulting Center (SACC)", link: "#" },
                { title: "Writing Center", link: "#" },
                { title: "Math Lab", link: "#" },
                { title: "Library Services", link: "#" },
                { title: "Academic Advisement", link: "#" }
              ]}
            />

            <CardLinkList 
              header="Career and Experience"
              content={[
                { title: "Career Development Center", link: "#" },
                { title: "Internship Programs", link: "#" },
                { title: "Study Abroad", link: "#" },
                { title: "Honors Programs", link: "#" },
                { title: "Research Opportunities", link: "#" }
              ]}
            />

            <CardLinkList 
              header="Helpful Resources"
              content={[
                { title: "CUNYfirst", link: "#" },
                { title: "Class Schedule", link: "#" },
                { title: "Registration Guide", link: "#" },
                { title: "Academic Calendar", link: "#" },
                { title: "DegreeWorks", link: "#" }
              ]}
            />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-tangerine py-16">
        <div className="max-width-wrapper">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-center font-bold text-5xl text-white mb-8">Classes and Registration</h2>
            <p className="text-white mb-8">There are many resources available to help you be successful in your studies and career preparation. From academic advisors to tutors to career coaches, staff in offices across the university are available to help you identify your goals and create a plan for achieving them.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <a href="#" className="bg-white text-center relative shadow-sm rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-all top-0 hover:top-[-2px] group">
                  <span className="p-4 block text-xl rounded-lg font-bold leading-tight text-heading hover:bg-primary-sky/10 w-full">{category}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LayoutPage wide={true}>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardLinkList 
            header="Academic Support"
            content={[
              { title: "Student Academic Consulting Center (SACC)", link: "#" },
              { title: "Writing Center", link: "#" },
              { title: "Math Lab", link: "#" },
              { title: "Library Services", link: "#" },
              { title: "Academic Advisement", link: "#" }
            ]}
          />

          <CardLinkList 
            header="Academics & Career Preparation"
            content={[
              { title: "Career Development Center", link: "#" },
              { title: "Internship Programs", link: "#" },
              { title: "Study Abroad", link: "#" },
              { title: "Honors Programs", link: "#" },
              { title: "Research Opportunities", link: "#" }
            ]}
          />

          <CardLinkList 
            header="Classes and Registration"
            content={[
              { title: "CUNYfirst", link: "#" },
              { title: "Class Schedule", link: "#" },
              { title: "Registration Guide", link: "#" },
              { title: "Academic Calendar", link: "#" },
              { title: "DegreeWorks", link: "#" }
            ]}
          />

          <CardLinkList 
            header="Cost, Billing and Financial Support"
            content={[
              { title: "Financial Aid", link: "#" },
              { title: "Tuition and Fees", link: "#" },
              { title: "Payment Plans", link: "#" },
              { title: "Scholarships", link: "#" },
              { title: "Student Accounts", link: "#" }
            ]}
          />

          <CardLinkList 
            header="Building Community"
            content={[
              { title: "Student Organizations", link: "#" },
              { title: "Campus Events", link: "#" },
              { title: "Student Government", link: "#" },
              { title: "Cultural Centers", link: "#" },
              { title: "Leadership Programs", link: "#" }
            ]}
          />

          <CardLinkList 
            header="Wellness and Technology Resources"
            content={[
              { title: "Health and Wellness Center", link: "#" },
              { title: "Counseling Center", link: "#" },
              { title: "IT Help Desk", link: "#" },
              { title: "Student Technology Resources", link: "#" },
              { title: "Disability Services", link: "#" }
            ]}
          />
        </section>
      </LayoutPage>
    </div>
  );
}

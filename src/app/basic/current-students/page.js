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

const breadcrumbData = []

const sidebar = <SidebarNav/>

export default function CurrentStudents() {
  return (
    <div>
      <LayoutPage sidebar={sidebar}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>Current students</PageTitle>
        </div>
        <article className="prose lg:prose-lg max-w-none mx-auto">
          <p className="lead">As a Baruch College student, you're part of a dynamic, driven community in the heart of New York City. This page is your starting point for accessing the tools, resources, and support that will help you succeed both inside and outside the classroom. Whether you're registering for classes, checking your financial aid status, connecting with an academic advisor, or exploring student services, you'll find everything you need to stay on track and make the most of your time at Baruch.</p>
          <p>Your Baruch experience goes beyond academics—it's about growing as a leader, building your network, and finding your voice. Get involved with student organizations, attend campus events, explore leadership programs, and take advantage of career development services designed to prepare you for what's next. No matter your goals, this site connects you to the opportunities and support that make Baruch a place where ambition meets action.</p>

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
        </article>
      </LayoutPage>
    </div>
  );
}

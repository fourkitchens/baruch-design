import photo from "@/assets/images/UNA-USA-Fellow_.gif";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import LayoutPage from "@/components/layoutPage";
import PageTitle from "@/components/pageTitle";
import SidebarNav from "@/components/sidebarNav";
import students from '@/assets/images/230621-Mario-Morgado-255.png';
import students2 from '@/assets/images/Baruch-students_NVC.jpg';
import athletics from '@/assets/images/2017CUNYACSeniors.webp';
import SectionBanner from "@/components/sectionBanner";

const breadcrumbData = [
  { name: 'Academic Affairs', href: '#', current: false },
  { name: 'Assessment, Accreditation, and Institutional Effectiveness', href: '#', current: false },
]

const sidebar = <SidebarNav/>

export default function Basic() {
  return (
    <div>
      <SectionBanner organizationalDescriptor="Office of the" title="Provost" />
      <LayoutPage sidebar={sidebar}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>Accreditation</PageTitle>
        </div>
        <article className="prose lg:prose-lg max-w-none mx-auto">
          <h2>Institutional accreditation</h2>
          <Image src={students2} alt="Students" className="w-1/2 float-right ml-8 mb-8" />
          <h3>Middle States Commission on Higher Education</h3>
          <p>Baruch College has been accredited by the <a href="https://www.msche.org/">Middle States Commission on Higher Education</a> (MSCHE) since 1968.</p>
          <p>MSCHE is an institutional accrediting agency recognized by the U.S. Secretary of Education and the Council for Higher Education Accreditation.</p>
          <p>Contact: Middle States Commission on Higher Education, 3624 Market Street, Philadelphia, PA 19104, or by phone, 267-284-5000.</p>
          <p>Please read the <a href="https://msche.box.com/shared/static/sb2xi07n7cd9v90wksurky2sh4p7twwj.pdf">Middle States Commission policy on Complaints Involving Member and Candidate Institutions</a> for a complete explanation of how to communicate with the Commission regarding a complaint. The Commission’s complaint procedures are created to address non-compliance with the Commission’s standards for accreditation, requirements of affiliation, policies or procedures, or the institution’s own policies or procedures.</p>
          <h3>Baruch College Self-Study 2020</h3>
          <p>The Baruch College community most recently engaged in a comprehensive Self-Study process between Fall 2017 and Spring 2020, culminating in the production of a <a href="https://provost.baruch.cuny.edu/wp-content/uploads/sites/5/2021/03/Baruch-College-Self-Study_2020-01-17-FINAL-MSCHE-submission-with-endnotes.pdf">Baruch College Self Study 2020 Report</a>, a site visit in March 2020, and subsequently, receiving an extremely positive and encouraging <a href="https://provost.baruch.cuny.edu/wp-content/uploads/sites/5/2021/03/Baruch-College-Self-Study-2020-Evaluation-Team-Visit-Report-2020-April-08.pdf">Evaluation Team Visit Report 2020</a> in April, culminating in a Commission vote approving reaccreditation, as noted in the Statement of Accreditation Status.</p>
          <h4>Statement of Accreditation Status</h4>
          <p>To view Baruch’s current MSCHE accreditation status, please see the <a href="https://www.msche.org/institution/0275/">Middle States Statement of Accreditation Status for Baruch College</a>.</p>
          <Image src={students} alt="Students" className="w-full" />
          <h2>Specialized accreditation</h2>
          <p>Within Baruch College, we also have school- and program-specific accreditation, a category which is known as specialized accreditation. To learn more about Baruch’s specialized accreditations, please read about:</p>
          <ul>
            <li><a href="https://www.aacsb.edu/accreditation/">Association to Advance Collegiate Schools of Business (AACSB) accreditation</a> of the Zicklin School of Business for both Accounting and Business. For further information about accreditation in the Zicklin School, please contact Lisa Vaia, Director of Accreditation and Curriculum Management, at lisa.vaia@baruch.cuny.edu.</li>
            <li><a href="https://www.naspaa.org/accreditation">Network of Schools of Public Policy, Affairs, and Administration (NASPAA) accreditation</a><span> of the Marxe School of Public and International Affairs. For additional information about accreditation of the <a href="https://marxe.baruch.cuny.edu/academics/master-of-public-administration/">Master of Public Administration (M.P.A.) program</a> in the Marxe School, please contact Professor John Casey, director of the M.P.A. program, at john.casey@baruch.cuny.edu.</span></li>
          </ul>
          <h2>Academic Program Registration</h2>
          <p>All degree programs offered at Baruch College are registered with the <a href="http://www.nysed.gov/college-university-evaluation">New York State Education Department</a>, and are listed in the <a href="http://www.nysed.gov/heds/IRPSL1.html">NYSED Inventory of Registered Programs</a>.</p>
          <h2>Athletics</h2>
          <Image src={athletics} alt="Athletics" />
          <p>Baruch College is a <a href="https://web3.ncaa.org/directory/orgDetail?id=58">member of Division III</a> of the <a href="https://www.ncaa.org/">National Collegiate Athletic Association (NCAA)</a>, a member-led organization dedicated to the well-being and lifelong success of college athletes. Baruch College complies with all <a href="http://www.ncaapublications.com/productdownloads/D321.pdf">articles and principles of the NCAA Division III Manual</a>.</p>
          <p>Baruch is also a member of the <a href="https://ecacsports.com/sports/2019/3/7/about.aspx">Eastern College Athletic Conference</a>.</p>
          <p>For more information about the Athletics program at Baruch College, please contact Heather MacCulloch, Director of Athletics and Recreation, at heather.macculoch@baruch.cuny.edu.</p>
        </article>
      </LayoutPage>
    </div>
  );
}

import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import PageTitle from "@/components/pageTitle";
import Behar from "@/assets/images/profiles/behar.jpg"
import Milch from "@/assets/images/profiles/milch.jpg"
import SchwartzAnne from "@/assets/images/profiles/Schwartz-Anne.jpg"
import SlavinDennis from "@/assets/images/profiles/Slavin-Dennis.png"
import Wollman from "@/assets/images/profiles/Wollman.jpg"
import ProfileCard from "@/components/profileCard";

const breadcrumbData = []

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


export default function ProgramList() {
  return (
    <>
      <Header />
      <LayoutPage wide={true}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>Faculty Profiles</PageTitle>
        </div>

        <section className="mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold w-max whitespace-nowrap">Search by name, expertise, or keyword:</h2>
            <input type="text" placeholder="Search programs" className="w-1/3 rounded-md border-none px-4 py-2 ring-1 shadow-xs ring-neutral-pewter/50" value="Performing Arts" />
          </div>
          <h3 className="text-2xl font-semibold">Showing search Results for "Performing Arts"</h3>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <ul role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-20 lg:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-3">
            {[...Array(2)].map((_, iteration) => 
              profileData
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((profile) => (
                  <li key={`${profile.name}-${iteration}`}>
                    <ProfileCard profile={profile} />
                  </li>
                ))
            )}
          </ul>
        </div>
      </LayoutPage>
      <Footer />
    </>
  );
}
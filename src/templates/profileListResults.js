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
import Image from "next/image";
import BaruchLogo from "@/assets/logos/BaruchLogo";

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

const ExpandedResults = () => (
  <>
    <div className="space-y-4 mt-8">
      <section>
        <h3 className="text-lg font-semibold uppercase text-primary-cuny-blue">Related Research</h3> 
        <p>14 of 76 displayed</p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Book Chapters</h3>
        <p>(2013) <span>Emotional dimensions within the family business – Toward a conceptualization.</span></p>
        <p>(2013) <span>Extensions of the Sustainable Family business Theory (SFBT): Operationalization and Application.</span></p>
        <p>(2008) <span>"Impact of the Family business on Family business Sustainability." Culturally-Sensitive Models of Family business in Anglo Culture: A Compendium Using the GLOBE Paradigm.</span></p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Journal Articles</h3>
        <p>(2013) <span>Exploring the Emotional Nexus in Cogent Family business Archetypes.</span></p>
        <p>(2012) <span>Strategy, Ownership, Governance, and Socio-Psychological Perspectives on Family businesses From Around the World.</span></p>
        <p>(2011) <span>The Importance of the Family System in Family business.</span></p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Other Scholarly Works</h3>
        <p>(1993) <span>The impact of paid and unpaid workers on the economic output measures of home-based businesses.</span></p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Presentations</h3>
        <p>(2016-03-29) <span>Family Entrepreneurship: The Interconnections Between the Family System and business System.</span></p>
        <p>(2016-03-21) <span>Family Entrepreneurship: The Interconnections Between the Family System and business System.</span></p>
        <p>(2015-08-10) <span>The Role of Family businesses in Global Cities.</span></p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Research Currently in Progess</h3>
        <p> <span>A Review of Models and Theories of the Family Firm: The Nature and Importance of the business and the Family Domemsions (Planned submission to Family business Review).</span></p>
        <p> <span>Emotional dimensions within the family business – Toward a conceptualization and extension (Planned submission to Family business Review).</span></p>
        <p> <span>Expansion of the Cluster Model: The Family System's Entrepreneurial Effects over Generations (Planned submission to Family business Review).</span></p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">Reviews</h3>
        <p>(2002-01-01) <span>The daughter also rises: How women overcome obstacles and advance in the family-owned business.</span></p>
      </section>
    </div>
  </>
);

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
            <input type="text" placeholder="Search programs" className="w-1/3 rounded-md border-none px-4 py-2 ring-1 shadow-xs ring-neutral-pewter/50" defaultValue="Performing Arts" />
          </div>
          <h3 className="text-2xl font-semibold">Showing search Results for "Performing Arts"</h3>
        </section>

        <div className="mx-auto max-w-7xl">
          <ul role="list"
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none flex flex-col gap-12">
            {[...Array(2)].map((_, iteration) => 
              profileData
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((profile) => (
                  <li key={`${profile.name}-${iteration}`}>
                    <div className="flex flex-row gap-4 not-prose">
                      {profile.image ? (
                        <Image src={profile.image} alt={profile.name} className="object-cover rounded-lg aspect-square mb-4 w-[150px] h-[150px]" />
                      ) : (
                        <div className="bg-neutral-slate rounded-lg aspect-square mb-4 flex items-center justify-center w-[150px] h-[150px] p-4">
                          <BaruchLogo className="w-[200px] h-auto lg:w-[200px] text-white/50" />
                        </div>
                      )}
                      <div className="leading-tight space-y-2">
                        <h3 className="text-2xl font-bold text-balance">
                          <a href="#" className="link leading-snug font-semibold text-heading">{profile.name}</a>
                        </h3>
                        <p className="font-semibold text-lg">{profile.title}</p>
                        <p className="text-lg leading-tight">{profile.school}</p>
                        <p className="">{profile.department}</p>
                        <ExpandedResults />
                      </div>
                    </div>
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
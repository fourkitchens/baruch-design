import Header from "@/components/header";
import Footer from "@/components/footer";
import LayoutPage from "@/components/layoutPage";
import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import Button from "@/components/button";
import headshot from "@/assets/images/profiles/Schwartz-Anne.jpg"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from "clsx";

const breadcrumbData = [
  { name: 'Faculty Profiles', href: '#', current: false },
]

const teachingData = [
  {"Semester": "Fall 2024", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2024", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2023", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2023", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2022", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2022", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2021", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2021", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2020", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2020", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Spring 2020", "Course Prefix": "MSC", "Course Number": "1003", "Course Name": "Music in Civilization"},
  {"Semester": "Fall 2009", "Course Prefix": "MSC", "Course Number": "1003", "Course Name": "Music in Civilization"},
  {"Semester": "Fall 2009", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2009", "Course Prefix": "MSC", "Course Number": "1003", "Course Name": "Music in Civilization"},
  {"Semester": "Spring 2009", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2008", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Fall 2008", "Course Prefix": "MSC", "Course Number": "1003", "Course Name": "Music in Civilization"},
  {"Semester": "Spring 2008", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2008", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Spring 2008", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Fall 2007", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Fall 2007", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2007", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2007", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2007", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2006", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Fall 2006", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2006", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Spring 2006", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2006", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Fall 2005", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Fall 2005", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2005", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2005", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Spring 2005", "Course Prefix": "MSC", "Course Number": "5000", "Course Name": "Independent Study Music I"},
  {"Semester": "Fall 2004", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Fall 2004", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2004", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2004", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2003", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Fall 2003", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2003", "Course Prefix": "MSC", "Course Number": "1005", "Course Name": "Principles of Music"},
  {"Semester": "Spring 2003", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2002", "Course Prefix": "IDC", "Course Number": "1001H", "Course Name": "Honors-The Arts in New York"},
  {"Semester": "Fall 2002", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Spring 2002", "Course Prefix": "MSC", "Course Number": "3016", "Course Name": "Music of the Twentieth Century"},
  {"Semester": "Fall 2001", "Course Prefix": "MSC", "Course Number": "3004", "Course Name": "Music of the Romantic Period"},
  {"Semester": "Fall 2001", "Course Prefix": "IDC", "Course Number": "1001H", "Course Name": "Honors-The Arts in New York"},
  {"Semester": "Fall 2001", "Course Prefix": "IDC", "Course Number": "1001H", "Course Name": "Honors-The Arts in New York"}
]

const TabStyled = ({ children }) => {
  return (
    <Tab className={clsx(
      "text-white/90 text-lg font-semibold",
      "px-4 py-2",
      "border border-white/40 border-b-0 rounded-t",
      "hover:bg-white/10 hover:text-white",
      "data-selected:bg-neutral-pearl data-selected:text-primary-cuny-blue"
    )}>
      {children}
    </Tab>
  )
}

const TabPanelStyled = ({ children }) => {
  return (
    <TabPanel>
      <div className="mx-auto max-width-wrapper prose lg:prose-lg">
        {children}
      </div>
    </TabPanel>
  )
}

const TeachingTable = () => {
  return (
    <table className="w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-base font-semibold text-gray-900 sm:pl-3">
            Semester
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
            Course Code
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
            Course Name
          </th>
        </tr>
      </thead>
      <tbody className="bg-bg-light">
        {teachingData.map((course, index) => (
          <tr key={index} className="even:bg-neutral-pearl-dark">
            <td className="py-4 pr-3 pl-4 text-base font-medium text-gray-900 sm:pl-3">
              {course.Semester}
            </td>
            <td className="px-3 py-4 text-base text-gray-900">
              {course["Course Prefix"]} {course["Course Number"]}
            </td>
            <td className="px-3 py-4 text-base text-gray-900">{course["Course Name"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Profile() {
  return (
    <>
      <Header />
      
      <section className="bg-primary-midtown-blue text-white">
        <div className="mx-auto max-width-wrapper grid grid-cols-3 gap-x-16 py-16">
          <div className="aspect-square w-full bg-neutral-slate rounded">
            <Image src={headshot} alt="Anne Swartz" className="w-full h-full object-cover rounded" />
          </div>
          <div className="col-span-2">
            <Breadcrumbs pages={breadcrumbData} className="[--text-color:var(--color-white)] [--link-color:var(--color-white)] [--link-hover-color:var(--color-white)] [--link-current-color:var(--color-white)] [--link-current-hover-color:var(--color-white)] mb-4" />
            <h1 className="text-5xl font-bold">Anne Swartz</h1>
            <p className="text-4xl opacity-80 font-semibold">Professor</p>
            <p className="text-2xl mt-4">Weissman School of Arts and Sciences</p>
            <div className="mt-8 space-y-4 text-xl grid grid-cols-2 gap-x-6 gap-y-2">
              <p><strong className="opacity-80 uppercase text-base">Department:</strong><br/><a href="#" className="link link-midtown-blue-bg">Fine & Performing Arts</a></p>
              <p><strong className="opacity-80 uppercase text-base">Email:</strong><br/><a href="#" className="link link-midtown-blue-bg">anne.swartz@baruch.cuny.edu</a></p>
              <p><strong className="opacity-80 uppercase text-base">Subject Matter Expertise:</strong><br/><a href="#" className="link link-midtown-blue-bg">International Business</a><br/><a href="#" className="link link-midtown-blue-bg">Market Research</a><br/><a href="#" className="link link-midtown-blue-bg">Marketing</a></p>
              <p><strong className="opacity-80 uppercase text-base">Areas of Expertise:</strong><br/>Marketing Research, Consumer Brand
              Choice, Brand Switching and Purchase Behavior, Consumer Response to Promotions, Emotions and Music</p>
              <Button>View CV</Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <TabGroup>
          <div className="bg-primary-midtown-blue text-white">
            <TabList className="mx-auto max-width-wrapper flex gap-x-2">
              <TabStyled>Biography</TabStyled>
              <TabStyled>Teaching</TabStyled>
              <TabStyled>Research and Creative Activity</TabStyled>
              <TabStyled>Honors and Awards</TabStyled>
              <TabStyled>Service</TabStyled>
            </TabList>
          </div>
          <TabPanels className="py-16">
            <TabPanelStyled>
                <h2>Biography</h2>
                <p>Anne Swartz is Professor of Music and Chair of the Department of Fine and Performing Arts at Baruch College.  She is also a member of the faculty of the Ph.D./D.M.A. Program in Music at The Graduate Center of the City University of New York, where she has taught courses in Russian musical romanticism and modernism. On the undergraduate level her teaching focuses on music of the romantic era and music of the twentieth century, in addition to music introductory courses.  Her research interests include Russian and East European romanticism, especially the music of Chopin, Tchaikovsky, and Maria Szymanowska; eighteenth-century women composers; and Russian piano history. Swartz's recent book, Piano Makers in Russia in the Nineteenth Century (Lehigh University Press, 2014; paperback edition, 2016), received research funding from the Kennan Institute of the Woodrow Wilson International Center for Scholars. She was recently interviewed by the BBC on Chopin's piano and continues to conduct archival research in Russia and Poland. She has published numerous peer-reviewed articles and chapters in books, and critical musical editions of Szymanowska's keyboard works. She continues to participate as invited lecturer at scholarly conferences in the United States and abroad and has presented lectures in Russian and Polish at the St. Petersburg Rimsky-Korsakov Conservatory, St. Petersburg University, the University of Warsaw, and the Biblioteka Narodowa, Warsaw.  Swartz's next book focuses on Maria Wolowska Szymanowska as a ground-breaking feminist, pianist, and Polish cultural ambassador at the Russian court.</p>
                <p>For her pioneering work on Russian and East European music Swartz has been awarded fourteen PSC-CUNY grants, and she has received eleven research grants and fellowships from prestigious national agencies, including the Woodrow Wilson International Center for Scholars (Kennan Institute for Advanced Russian Studies; and East European Program); the National Endowment for the Humanities; the American Council of Learned Societies; the International Research and Exchanges Board; and the Andrew W. Mellon Foundation.
                </p>
                <p>Swartz's public lectures include, "Tchaikovsky and the Piano in St. Petersburg's Gilded Age," in celebration of the 120th anniversary of the opening of Carnegie Hall, a collaborative project with Carnegie Hall, the Mariinsky Theatre, and the New York Public Library;  invited co-presenter, with Lambert Orkis, in a lecture and performance event honoring Mstislav Rostropovich's legacy of musical diplomacy, sponsored by the Kennan Institute and the Kennedy Center as part of the National Symphony Orchestra's A Salute to Slava; and an invited public lecture at an international symposium in honor of the Russian ballet tradition and Marius Petipa, "From Bordeaux to Saint Petersburg: Marius Petipa and the 'Russian' ballet," sponsored by UNESCO, the University of Bordeaux, and the Grand-Théâtre de Bordeaux, Bordeaux, France. </p>
                <h2>Education</h2>
                <p>Ph.D., Historical Musicology, University of Pittsburgh</p>
                <p>M.A., Historical Musicology, University of Pittsburgh</p>
                <p>B.A., Music, Wilson College</p>

            </TabPanelStyled>
            <TabPanelStyled>
              <h2>Teaching</h2>
              <TeachingTable/>
            </TabPanelStyled>
            <TabPanelStyled>Content 3</TabPanelStyled>
            <TabPanelStyled>Content 4</TabPanelStyled>
            <TabPanelStyled>Content 5</TabPanelStyled>
          </TabPanels>
        </TabGroup>

      </section>

      
      
      
      
      <Footer />
    </>
  );
}
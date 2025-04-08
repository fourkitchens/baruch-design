import Breadcrumbs from "@/components/breadcrumbs";
import LayoutPage from "@/components/layoutPage";
import PageTitle from "@/components/pageTitle";
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const breadcrumbData = []

const people = [
  {
    name: 'S. David Wu',
    title: 'President',
    imageUrl: '/images/cabinet/wu.png',
    email: '#',
  },
  {
    name: 'Linda Essig',
    title: 'Provost and Senior Vice President for Academic Affairs',
    imageUrl: '/images/cabinet/linda.jpg',
    email: '#',
  },
  {
    name: 'Kendelle R. Argretté',
    title: 'Interim Chief Diversity Officer',
    imageUrl: '/images/cabinet/kendelle.png',
    email: '#',
  },
  {
    name: 'Olga Dais',
    title: 'Assistant Vice President, Legal Counsel and Labor Designee',
    imageUrl: '/images/cabinet/olga.png',
    email: '#',
  },
  {
    name: 'Stephen Giannotti',
    title: 'Vice President for Information Services and Chief Information Officer',
    imageUrl: '/images/cabinet/stephen.jpg',
    email: '#',
  },
  {
    name: 'Alaina Gilligo',
    title: 'Vice President for Operations and Administration',
    imageUrl: '/images/cabinet/alaina.png',
    email: '#',
  },
  {
    name: 'Mary Gorman',
    title: 'Vice President for Enrollment Management and Strategic Academic Initiatives',
    imageUrl: '/images/cabinet/mary.png',
    email: '#',
  },
  {
    name: 'Andreas Grein',
    title: 'Chair, Faculty Senate',
    imageUrl: '/images/cabinet/andreas.png',
    email: '#',
  },
  {
    name: 'Art King',
    title: 'Vice President for Student Affairs & Dean of Students',
    imageUrl: '/images/cabinet/art.png',
    email: '#',
  },
  {
    name: 'Jessica Lang',
    title: 'Dean, Weissman School of Arts and Sciences',
    imageUrl: '/images/cabinet/jessica.png',
    email: '#',
  },
  {
    name: 'Kenya N. Lee',
    title: 'Chief of Staff',
    imageUrl: '/images/cabinet/kenya.png',
    email: '#',
  },
  {
    name: 'Sherry Ryan',
    title: 'Marxe Dean, Marxe School of Public and International Affairs',
    imageUrl: '/images/cabinet/sherry.jpg',
    email: '#',
  },
  {
    name: 'David Shanton',
    title: 'Vice President for College Advancement',
    imageUrl: '/images/cabinet/david.png',
    email: '#',
  },
  {
    name: 'Bruce W. Weber',
    title: 'Willem Kooyker Dean, Zicklin School of Business',
    imageUrl: '/images/cabinet/bruce.png',
    email: '#',
  },
];

export default function Cabinet() {
  return (
    <div>
      <div className="bg-white text-body py-3 border-b border-neutral-dove">
        <div className="max-width-wrapper ">
          <p className="text-[100px] leading-[100px] uppercase font-bold font-field-gothic flex flex-row gap-2">
            <span className="text-body font-normal">Office of the</span>
            <span className="text-heading">President</span>
          </p>
        </div>
      </div>
      <LayoutPage wide={true}>
        <div className="space-y-4">
          <Breadcrumbs pages={breadcrumbData} />
          <PageTitle>President's Cabinet</PageTitle>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0 prose lg:prose-lg">
            <p>The President's Cabinet is a group of the College's top leaders—like the provost, vice presidents, deans, faculty senate chair, and senior staff from the president's office. They meet every week to talk about big-picture issues that impact the whole College.</p>
            <p>Their job is to help shape policies, give advice to the president, and make sure decisions are carried out smoothly. They also make sure the College's plans and resources are working together to support its mission.</p>
            <p>Want to see what they've been discussing? <a href="#">Check out the meeting minutes.</a></p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-20 lg:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="aspect-square w-full rounded-2xl object-cover" />
                <h3 className="mt-6 mb-2 text-xl leading-snug font-semibold text-heading">
                  <a className="link" href="#">{person.name}</a>
                </h3>
                <p className="text-base/7 text-body leading-snug">{person.title}</p>
                <p className="mt-4 text-base/7 text-body flex flex-row gap-2 items-center">
                  <EnvelopeIcon aria-hidden="true" className="size-5 text-neutral-pewter" />
                  <a className="link" href={`mailto:${person.email}`}>Email</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </LayoutPage>
    </div>
  );
}

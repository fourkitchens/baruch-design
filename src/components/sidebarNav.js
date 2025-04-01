import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';

const navigation = [
  { 
    name: 'Home', 
    href: 'https://provost.baruch.cuny.edu/', 
    current: false 
  },
  {
    name: 'Initiatives',
    current: false,
    children: [
      { name: 'Artificial Intelligence Think Tank', href: 'https://provost.baruch.cuny.edu/artificial-intelligence-think-tank/' },
      { name: 'Experiential and Community Engaged Learning (ExCEL)', href: 'https://provost.baruch.cuny.edu/experiential-learning/' },
      { name: 'Faculty Grants and Awards for 2024-2025', href: 'https://provost.baruch.cuny.edu/faculty-grants-and-awards-for-2024-2025/' },
      { name: 'Mental Health Awareness Week 2025', href: 'https://provost.baruch.cuny.edu/mental-health-awareness-week/' }
    ]
  },
  {
    name: 'Leadership',
    current: false,
    children: [
      { name: 'Organization Charts', href: 'https://provost.baruch.cuny.edu/baruch_links/organization-charts/', target: '_blank', rel: 'noopener' }
    ]
  },
  {
    name: 'Academic Affairs',
    current: false,
    children: [
      {
        name: 'Teaching, Learning, and Student Success',
        href: 'https://provost.baruch.cuny.edu/teaching-learning-student-success/',
        children: [
          { name: 'College Agreements', href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/collegeagreements/' },
          { name: 'Academic Honesty', href: 'https://provost.baruch.cuny.edu/teaching-learning-student-success/academic_honesty/' },
          { name: 'Support for Students', href: 'https://provost.baruch.cuny.edu/teaching-learning-student-success/support-for-students/' },
          { name: 'Support for Faculty', href: 'https://provost.baruch.cuny.edu/teaching-learning-student-success/support-for-faculty/' }
        ]
      },
      {
        name: 'Academic Administration',
        href: 'https://provost.baruch.cuny.edu/academic-affairs/academic-administration/',
        children: [
          { name: 'Reappointment, Tenure, CCE, and Promotion', href: 'https://provost.baruch.cuny.edu/reappointment-tenure-promotion-and-cce/' },
          { name: 'Baruch College Faculty P&B Guidelines', href: 'https://provost.baruch.cuny.edu/baruch-college-faculty-pb-guidelines/' },
          {
            name: 'Department Chairs and Faculty Personnel Committees',
            children: [
              { name: 'List of Department Chairs', href: 'https://provost.baruch.cuny.edu/wp-content/uploads/sites/5/2025/01/Department-Chairs-for-Academic-Year-2024-2025-REV-12.13.24.pdf' },
              { name: 'Representatives to Faculty Personnel Committees', href: 'https://provost.baruch.cuny.edu/wp-content/uploads/sites/5/2024/10/Representatives-to-Baruch-College-Committees-AY-2024-2025-rev-MB-10.22.24-1.pdf' }
            ]
          },
          { name: 'Faculty Workload Reporting and Compliance', href: 'https://provost.baruch.cuny.edu/faculty-workload-reporting-and-compliance/' },
          { name: 'Faculty Leaves', href: 'https://provost.baruch.cuny.edu/faculty-leaves/' },
          { name: 'New Faculty', href: 'https://provost.baruch.cuny.edu/academic-affairs/academic-administration/new-faculty/' },
          { name: 'International Faculty', href: 'https://provost.baruch.cuny.edu/academic-affairs/academic-administration/international-faculty/' },
          { name: 'Chair Resources', href: 'https://provost.baruch.cuny.edu/chair-resources/' },
          { name: 'Faculty Forms', href: 'https://provost.baruch.cuny.edu/academic-affairs/academic-administration/faculty-forms/' }
        ]
      },
      {
        name: 'Assessment, Accreditation & Institutional Effectiveness',
        href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/',
        children: [
          { name: 'Institutional Effectiveness', href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/institutional-effectiveness/' },
          { name: 'Data-driven Decision Making', href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/test-data-driven-decision-making/' },
          { name: 'Program Review', href: 'https://provost.baruch.cuny.edu/program-review/' },
          {
            name: 'Assessment',
            href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/assessment/',
            children: [
              { name: 'Assessment Spotlight Series', href: 'https://provost.baruch.cuny.edu/assessment-spotlight-series/' }
            ]
          },
          {
            name: 'MSCHE Institutional Accreditation',
            href: 'https://provost.baruch.cuny.edu/msche-institutional-accreditation/',
            children: [
              { name: 'Interview with MSCHE Liaison, Dr. Tiffany Lee', href: 'https://provost.baruch.cuny.edu/msche-institutional-accreditation/interview-with-msches-vice-president-for-institutional-field-relations-and-commission-liaison-dr-tiffany-lee/' }
            ]
          },
          { name: 'Specialized Accreditation', href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/accreditation/specialized-accreditation/' },
          { name: 'NYSED – Academic Program Registration', href: 'https://provost.baruch.cuny.edu/nysed-academic-program-registration/' },
          { name: 'National Collegiate Athletic Association (NCAA)', href: 'https://provost.baruch.cuny.edu/academic-affairs/assessment-accreditation-institutional-effectiveness/accreditation/national-collegiate-athletic-association-ncaa/' }
        ]
      },
      { name: 'Research', href: 'https://provost.baruch.cuny.edu/academic-affairs/research-development-and-support/' },
      { name: 'Faculty Convocation', href: 'https://provost.baruch.cuny.edu/faculty-convocation/' }
    ]
  },
  { 
    name: 'Faculty Handbook', 
    href: 'https://provost.baruch.cuny.edu/faculty-handbook/', 
    current: false 
  },
  {
    name: 'Communications Archive',
    current: false,
    children: [
      { name: 'From the Provost', href: 'https://provost.baruch.cuny.edu/messages/department/provost/' },
      { name: 'From the Associate Provost for Teaching, Learning, and Student Success', href: 'https://provost.baruch.cuny.edu/messages/department/associate-provost-tl/' },
      { name: 'From the Associate Provost for Academic Admin. and Research', href: 'https://provost.baruch.cuny.edu/messages/department/associate-provost-aar/' }
    ]
  }
]

function NavItem({ item, level = 0 }) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <a
        href={item.href}
        target={item.target}
        rel={item.rel}
        className={clsx(
          item.current ? 'bg-transparent' : 'hover:bg-primary-sky/10',
          'block py-3 pr-2 pl-10 leading-tight font-medium text-body hover:text-primary-cuny-blue',
          level === 0 && 'text-lg',
          level === 1 && 'text-base',
          level >= 2 && 'text-sm'
        )}
      >
        {item.name}
      </a>
    );
  }

  return (
    <Disclosure as="div">
      <DisclosureButton
        className={clsx(
          item.current ? 'bg-transparent' : 'hover:bg-primary-sky/10',
          'group flex w-full items-center gap-x-3 py-3 pl-2 text-left leading-tight font-medium text-body hover:text-primary-cuny-blue',
          level === 0 && 'text-lg',
          level === 1 && 'text-base',
          level >= 2 && 'text-sm'
        )}
      >
        <ChevronRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-neutral-pewter transition-transform duration-200 group-data-[open]:rotate-90"
        />
        {item.name}
      </DisclosureButton>
      <DisclosurePanel as="ul" className="divide-y divide-neutral-dove/80">
        {item.children.map((child) => (
          <li key={child.name}>
            <NavItem item={child} level={level + 1} />
          </li>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}

export default function SidebarNav() {
  return (
    <nav 
      className="flex flex-1 flex-col bg-white rounded-sm ring-neutral-dove ring-1 shadow-sm"
      aria-label="Sidebar navigation"
    >
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="divide-y divide-neutral-dove">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavItem item={item} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>  
  )
}
import clsx from "clsx";
import BaruchLogoHorizontal from "@/assets/logos/BaruchLogoHorizontal";
import PrimaryNavAbout from '@/components/primaryNavAbout';

const utilityNavItems = [
  {
    title: "Calendar",
    url: "#"  // Add actual URLs as needed
  },
  {
    title: "Directory",
    url: "#"
  },
  {
    title: "Library",
    url: "#"
  },
  {
    title: "President's Office",
    url: "#"
  },
  {
    title: "News Center",
    url: "#"
  },
  {
    title: "Technology",
    url: "#"
  },
  {
    title: "Index A-Z",
    url: "#"
  }
];

const mainNavLinks = [
  {
    title: "About",
    url: "#",
    sections: [
      {
        header: "Our Leadership",
        items: [
          {
            title: "President S. David Wu, PhD",
            url: "#"
          },
          {
            title: "Office of the Provost",
            url: "#"
          },
          {
            title: "President's Cabinet",
            url: "#"
          }
        ]
      },
      {
        header: "Mission",
        items: [
          {
            title: "Mission Statement",
            url: "#"
          },
          {
            title: "Accreditation",
            url: "#"
          },
          {
            title: "Baruch at a Glance",
            url: "#"
          },
          {
            title: "Economic Mobility at a Glance",
            url: "#"
          },
          {
            title: "Diversity at Baruch",
            url: "#"
          },
          {
            title: "Legal Affairs and Labor Relations",
            url: "#"
          },
          {
            title: "Fact Sheet",
            url: "#"
          },
          {
            title: "Institutional Research",
            url: "#"
          },
          {
            title: "Honors and Rankings",
            url: "#"
          },
          {
            title: "Baruch Strategic Planning",
            url: "#"
          },
          {
            title: "Video Library",
            url: "#"
          }
        ]
      }
    ]
  },
  {
    title: "Admissions",
    url: "#"
  },
  {
    title: "Academics",
    url: "#"
  },
  {
    title: "Arts",
    url: "#"
  },
  {
    title: "Athletics",
    url: "#"
  },
  {
    title: "Students",
    url: "#"
  },
  {
    title: "Alumni",
    url: "#"
  }
];

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-indigo via-primary-cuny-blue to-secondary-grape">
      <div className="">
        <nav className="bg-primary-indigo py-1">
          <ul className="flex items-center justify-end gap-4 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            {utilityNavItems.map((item) => (
              <li key={item.title}>
                <a href={item.url} className={clsx("text-sm text-white/90 hover:text-white leading-none",
                  "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky"
                )}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start justify-start py-12 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <BaruchLogoHorizontal className="w-[300px] text-white" />
          <p className="text-primary-sky font-field-gothic uppercase font-bold text-8xl tracking-wide leading-[70px]">Accelerate your ambition.</p>
        </div>
        
        <nav className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 pb-2">
          <ul className="flex items-center justify-start gap-8">
            {mainNavLinks.map((item) => (
              <li key={item.title}>
                {item.title === "About" ? (
                  <PrimaryNavAbout />
                ) : (
                  <a href={item.url} className={clsx("text-xl font-bold text-white/90 hover:text-white",
                    "after:content-[''] after:block after:max-w-0 hover:after:max-w-full after:transition-all hover:after:duration-300 after:h-0.5 hover:after:bg-primary-sky"
                  )}>{item.title}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

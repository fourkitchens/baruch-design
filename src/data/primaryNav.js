import PrimaryNavAbout from '@/components/primaryNavAbout';
import PrimaryNavAcademics from '@/components/primaryNavAcademics';
import PrimaryNavAcademicsMobile from '@/components/primaryNavAcademicsMobile';

const mainNavLinks = [
  {
    title: "Academics",
    url: "#",
    popover: <PrimaryNavAcademics />,
    popoverMobile: <PrimaryNavAcademicsMobile />,
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
    title: "Admissions & Aid",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Student Life",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "About",
    url: "#",
    popover: <PrimaryNavAbout />
  },
];

export default mainNavLinks;
import PrimaryNavAbout from '@/components/primaryNavAbout';

const mainNavLinks = [
  {
    title: "About",
    url: "#",
    popover: <PrimaryNavAbout />,
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
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Academics",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Arts",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Athletics",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Students",
    url: "#",
    popover: <PrimaryNavAbout />
  },
  {
    title: "Alumni",
    url: "#",
    popover: <PrimaryNavAbout />
  }
];

export default mainNavLinks;
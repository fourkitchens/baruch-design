import NavSection from './NavSection';

const PrimaryNavAbout = () => {
  const sections = [
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
  ];

  return (
    <div className="grid grid-cols-2 gap-x-8">
      {sections.map((section) => (
        <NavSection 
          key={section.header}
          header={section.header}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default PrimaryNavAbout; 
import AcademicPages from '../templates/academicPages';
import sampleImage from '../assets/images/students_2265_hor.jpg';
import heroImage from '../assets/images/599827A7-4B42-4E6A-80AF-69EFB8A09EC3.png';

export default {
  title: 'Templates/Academic Page',
  component: AcademicPages,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Academic Page',
  args: {
    breadcrumbData: [
      { name: 'Programs', href: '#', current: false },
    ],
    courses: [
      {
        code: "ACC 2101",
        title: "Principles of Accounting",
        credits: 3
      },
      {
        code: "ACC 3202",
        title: "Accounting Information Systems",
        credits: 3
      },
      {
        code: "BPL 5100",
        title: "Business Policy",
        credits: 3
      }
    ],
    courses2: [
      {
        title: "ENG 2100: Writing I",
        description: "Develop fundamental writing skills through composition and analysis. Learn to craft clear, effective prose while exploring various writing styles and techniques.",
        credits: 3
      },
      {
        title: "ENG 2150: Writing II",
        description: "Build upon Writing I foundations with advanced composition techniques. Focus on research-based writing and critical analysis of complex texts.",
        credits: 3
      }
    ],
    programDetails: [
      {
        term: "School",
        description: "Weissman School of Arts and Sciences",
        url: "#"
      },
      {
        term: "Degree Type:",
        description: "Major/Minor"
      },
      {
        term: "Degree Outcome:", 
        description: "Bachelor of Arts"
      }
    ]
  }
}; 
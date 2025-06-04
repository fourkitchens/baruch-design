import Stats from "@/components/stats";
import image from "@/assets/images/Baruch-students_NVC.jpg";

const stats = [
  {
    id: 1,
    header: '92%',
    subhead: 'MPA Graduate Employment Rate (2023–24)',
    attribution: 'Marxe Graduate Outcomes Report'
  },
  {
    id: 2,
    header: '100%',
    subhead: 'Executive MPA Graduate Employment Rate (2022–23)',
    attribution: 'Marxe Graduate Outcomes Report'
  },
  {
    id: 3,
    header: '#34',
    subhead: 'National Ranking for MPA Programs',
    attribution: 'U.S. News & World Report'
  },
];

export default {
  title: 'Components/Stats/Simple',
  component: Stats,
  args: {
    image: image,
    alt: "",
    stats: stats,
  },
  argTypes: {
    bg: {
      control: 'select',
      options: ['bg-primary-midtown-blue', 'bg-primary-cuny-blue', 'bg-primary-indigo', 'bg-primary-sky', 'bg-secondary-chartreuse', 'bg-secondary-grape', 'bg-secondary-lemonade', 'bg-secondary-ochre', 'bg-secondary-tangerine', 'bg-secondary-taxi', 'bg-secondary-thistle'],
      description: 'The image background color',
    },
  },
};

export const StatsTemplate = {
  name: 'Simple',
};
import Stats from "@/components/stats";
import image from "@/assets/images/Baruch-students_NVC.jpg";

const stats = [
  {   
    id: 1, 
    header: '#1 Public College', 
    subhead: 'in New York State', 
    attribution: 'U.S. News & World Report (Best Colleges-North Ranking)' 
  },
  { 
    id: 3, 
    header: 'Top 25', 
    subhead: 'Public College in the U.S.', 
    attribution: 'Forbes Magazine' 
  },
  { 
    id: 2, 
    header: '#1 in the Nation', 
    subhead: '', 
    attribution: 'The Wall Street Journal (U.S. Colleges Offering the Best Value)' 
  },
]

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
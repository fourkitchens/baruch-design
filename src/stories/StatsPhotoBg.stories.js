import StatsPhotoBg from "@/components/statsPhotoBg";
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
  title: 'Components/Stats/Photo Background',
  component: StatsPhotoBg,
  args: {
    image: image,
    alt: "",
    stats: stats,
  },
};

export const StatsPhotoBgTemplate = {
  name: 'Photo Background',
};
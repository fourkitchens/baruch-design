import StatsPhotoBg from "@/components/statsPhotoBg";
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
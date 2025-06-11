import SchoolHero from '../components/school-hero';
import marxeBg from '../assets/images/marxe/IMG_5176 copy.jpg';
import weissmanBg from '../assets/images/weissman/restselect-raw-bySirin-2625 copy.jpg';
import zicklinBg from '../assets/images/zicklin/Page-Top-big-image5-3000x2000px.jpg';

export default {
  title: 'Components/SchoolHero',
  component: SchoolHero,
};

export const Marxe = {
  args: {
    schoolName: 'Marxe',
    schoolDescription: 'School of Public and International Affairs',
    backgroundImage: marxeBg,
    accentColor: 'text-secondary-chartreuse'
  }
};

export const Weissman = {
  args: {
    schoolName: 'Weissman',
    schoolDescription: 'School of Arts and Sciences',
    backgroundImage: weissmanBg,
    accentColor: 'text-secondary-thistle'
  }
};

export const Zicklin = {
  args: {
    schoolName: 'Zicklin',
    schoolDescription: 'School of Business',
    backgroundImage: zicklinBg,
    accentColor: 'text-secondary-lemonade'
  }
}; 
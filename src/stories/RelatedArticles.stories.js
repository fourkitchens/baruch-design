import RelatedArticles from "@/components/relatedArticles";
import news1 from '@/assets/images/news1.gif';
import news2 from '@/assets/images/news2.gif';
import news3 from '@/assets/images/UNA-USA-Fellow_.gif';

export default {
  title: 'Components/Related Articles',
  component: RelatedArticles,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    posts: {
      control: 'object',
      description: 'Array of article posts to display',
    },
  },
};

const defaultPosts = [
  {
    id: 1,
    title: 'Baruch and SUNY Broome Launch Seamless Transfer Program for Business Students',
    href: '#',
    description:
      'A new 2+2 agreement guarantees SUNY Broome business students admission to Baruch\'s Zicklin School of Business if they meet academic requirements.',
    imageUrl: news1,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
  {
    id: 2,
    title: 'Baruch Team Shines with Second Place Win at National Deloitte Challenge',
    href: '#',
    description:
      'A standout team from Baruch\'s Zicklin School of Business claimed second place in Deloitte\'s national FanTAXtic competition—marking an impressive debut on the national stage.',
    imageUrl: news2,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
  {
    id: 3,
    title: 'Baruch Senior Awarded Prestigious UN Fellowship to Advance Global Change',
    href: '#',
    description:
      'Baruch senior Adriana Lopez-Tavares was awarded the prestigious UNA-USA Fellowship, taking her passion for human rights and economic development to the United Nations Office for Disarmament Affairs.',
    imageUrl: news3,
    date: 'Mar 16, 2020',
    datetime: '2025-03-16',
  },
];

export const Default = {
  name: 'Related Articles',
  args: {
    posts: defaultPosts,
  },
};
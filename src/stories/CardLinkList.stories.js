import CardLinkList from '../components/cardLinkList';
import sampleImage from '../assets/images/students_2265_hor.jpg';

export default {
  title: 'Components/CardLinkList',
  component: CardLinkList,
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    header: 'Quick Links',
    image: sampleImage,
    content: [
      { title: 'Student Resources', link: '#' },
      { title: 'Academic Calendar', link: '#' },
      { title: 'Course Catalog', link: '#' },
      { title: 'Library Services', link: '#' },
    ],
    footer: 'Last updated: March 2024'
  }
};

export const WithoutImage = {
  args: {
    header: 'Quick Links',
    content: [
      { title: 'Student Resources', link: '#' },
      { title: 'Academic Calendar', link: '#' },
      { title: 'Course Catalog', link: '#' },
    ]
  }
};

export const WithoutHeader = {
  args: {
    image: sampleImage,
    content: [
      { title: 'Student Resources', link: '#' },
      { title: 'Academic Calendar', link: '#' },
      { title: 'Course Catalog', link: '#' },
    ],
    footer: 'Last updated: March 2024'
  }
}; 
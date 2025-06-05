import PostCard from "@/components/postCard";
import photo from '@/assets/images/news1.gif';

export default {
  title: 'Components/Post Card',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    compact: {
      control: 'boolean',
      description: 'Whether to display the card in a more compact format',
    },
    showDescription: {
      control: 'boolean',
      description: 'Whether to show the post description',
    },
  },
};

export const Default = {
  args: {
    post: {
      title: "Baruch College Announces New Business Analytics Program",
      description: "The Zicklin School of Business is launching a new program designed to prepare students for careers in data analytics and business intelligence.",
      date: "March 15, 2024",
      datetime: "2024-03-15",
      href: "#",
      imageUrl: photo
    },
    compact: false,
    showDescription: true
  }
};

export const Compact = {
  args: {
    ...Default.args,
    compact: true
  }
};

export const WithoutDescription = {
  args: {
    ...Default.args,
    showDescription: false
  }
};

export const CompactWithoutDescription = {
  args: {
    ...Default.args,
    compact: true,
    showDescription: false
  }
};

export const LongContent = {
  args: {
    post: {
      title: "Baruch College's Weissman School of Arts and Sciences Hosts International Conference on Urban Studies",
      description: "Leading scholars from around the world gathered at Baruch College to discuss the future of urban development, sustainability, and community engagement in major metropolitan areas. The conference featured keynote speakers, panel discussions, and workshops focused on innovative approaches to urban planning and policy.",
      date: "March 10, 2024",
      datetime: "2024-03-10",
      href: "#",
      imageUrl: photo
    },
    compact: false,
    showDescription: true
  }
}; 
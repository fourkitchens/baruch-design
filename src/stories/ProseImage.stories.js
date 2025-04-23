import photo from "@/assets/images/UNA-USA-Fellow_.gif";
import ProseImage from "@/components/proseImage";

export default {
  title: "Components/Prose Image",
  component: ProseImage,
  decorators: [
    (Story) => (
      <div className="max-width-wrapper py-16">
        <article className="prose lg:prose-lg max-w-2xl mx-auto">
          <p>Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
          <Story />
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <p>Lopez-Tavares won a coveted United Nations Association-USA Fellowship (UNA-USA) which provides financial assistance to those from underrepresented communities who receive internships with the United Nations. This Fellowship, a &ldquo;first-of-its-kind&rdquo; scholarship, comes with numerous benefits such as stipends of up to $13,000, mentorships, networking opportunities, and access to expert-led conferences and meetings on international peace and security.</p>
        </article>
      </div>
    ),
  ],
  args: {
    src: photo,
    alt: "Photo",
    caption: "Adriana Lopez-Tavares secured a fellowship with the United Nations Office for Disarmament Affairs that supports her goal of advancing human rights through international economic development.",
    presentation: "Breakout",
  },
  argTypes: {
    src: {
      control: 'object',
      description: 'The image source',
    },
    alt: {
      control: 'text',
      description: 'The image alt text',
    },
    caption: {
      control: 'text',
      description: 'The image caption',
    },
    presentation: {
      control: 'select',
      options: ['Normal', 'Breakout', 'Hang Left', 'Hang Right'],
      description: 'The image presentation',
    },
  },
};

export const ProseImageTemplate = {
  name: "Prose Image",
  args: {
    src: photo,
    alt: "Photo",
    caption: "Adriana Lopez-Tavares secured a fellowship with the United Nations Office for Disarmament Affairs that supports her goal of advancing human rights through international economic development.",
  },
};
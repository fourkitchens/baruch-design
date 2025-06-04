import Testimonial from '../components/testimonial';
import image from "@/assets/images/marxe/premium_photo-1661683653197-ca2d0aab80eb copy.jpg";

export default {
  title: 'Components/Testimonials/Large image',
  component: Testimonial,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    imageSide: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the image relative to the text'
    }
  }
};

export const Default = {
  name: 'Large image',
  args: {
    name: 'John Doe',
    title: 'CEO, Company Inc.',
    quote: 'This is an amazing product that has transformed how we do business. The team behind it is incredibly talented and responsive to our needs. I would highly recommend it to anyone looking to improve their workflow.',
    image: image,
    imageSide: 'left',
  },
};

import TestimonialCard from "@/components/testimonialCard";
import { testimonials } from "@/data/testimonials";

export default {
  title: 'Components/Testimonials/Card', 
  component: TestimonialCard,
  decorators: [
    (Story) => (
      <div className="bg-primary-cuny-blue min-h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    numberOfItems: {
      control: { type: 'range', min: 1, max: 3, step: 1 },
      description: 'Number of testimonials to display'
    },
    firstTestimonialBody: {
      control: 'text',
      description: 'Text for the first testimonial'
    },
    firstTestimonialName: {
      control: 'text',
      description: 'Name for the first testimonial author'
    },
    firstTestimonialMajor: {
      control: 'text',
      description: 'Major for the first testimonial author'
    },
    firstTestimonialGradYear: {
      control: 'text',
      description: 'Graduation year for the first testimonial author'
    }
  },
  args: {
    numberOfItems: 1,
    firstTestimonialBody: testimonials[0].body,
    firstTestimonialName: testimonials[0].author.name,
    firstTestimonialMajor: testimonials[0].author.major,
    firstTestimonialGradYear: testimonials[0].author.gradYear
  },
};

const TestimonialGrid = ({ 
  numberOfItems, 
  firstTestimonialBody,
  firstTestimonialName,
  firstTestimonialMajor,
  firstTestimonialGradYear
}) => {
  const firstTestimonial = {
    body: firstTestimonialBody,
    author: {
      ...testimonials[0].author,
      name: firstTestimonialName,
      major: firstTestimonialMajor,
      gradYear: firstTestimonialGradYear
    }
  };

  return (
    <div className="grid gap-8">
      <TestimonialCard testimonial={firstTestimonial} />
      {testimonials.slice(1, numberOfItems).map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

export const TestimonialCardTemplate = {
  render: (args) => <TestimonialGrid {...args} />,
  name: 'Card',
};

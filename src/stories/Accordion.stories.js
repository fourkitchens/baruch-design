import AccordionGroup from '../components/accordionGroup.js';

const data = [
  {
    question: "Undergraduate Admissions Information and Major Declaration",
    content:
      <p>Baruch College student Adriana Maria Lopez-Tavares ('25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
  },
  {
    question: "Public Affairs Learning Goals",
    content:
      <p>Baruch College student Adriana Maria Lopez-Tavares ('25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
  },
  {
    question: "The Hagedorn Internship",
    content:
      <p>Baruch College student Adriana Maria Lopez-Tavares ('25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
  },
]

export default {
  title: 'Components/Accordion',
  component: AccordionGroup,
  decorators: [
    (Story) => (
      <div className="prose lg:prose-lg max-w-3xl mx-auto mt-10">
        <Story />
      </div>
    ),
  ],
  args: {
    data: data,
    className: '-mx-2',
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'The accordion item data',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export const Accordion = {
};
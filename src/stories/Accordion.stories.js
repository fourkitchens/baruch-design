import AccordionGroup from '../components/accordionGroup';
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
  title: 'Components/Accordion Group',
  component: AccordionGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="prose lg:prose-lg max-w-none mx-auto">
        <Story />
      </div>
    ),
  ],
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

export const Primary = {
  args: {
    data: data,
    className: '-mx-2',
  },
};

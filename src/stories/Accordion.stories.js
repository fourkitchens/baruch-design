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
  parameters: {
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-72',
    }
  }
};

export const Accordion = {
};

export const FAQ = {
  render: (args) => (
    <>
      <h2>Frequently Asked Questions</h2>
      <AccordionGroup {...args} />
    </>
  ),
  args: {
    data: [
      {
        question: "What are the admission requirements?",
        content: <p>To be admitted to Baruch College, students must meet specific academic requirements including a minimum GPA, standardized test scores, and completion of prerequisite courses. Please visit our admissions page for detailed information.</p>
      },
      {
        question: "How do I apply for financial aid?",
        content: <p>Students can apply for financial aid by completing the FAFSA form and submitting any additional required documentation through the Baruch College financial aid office. Deadlines and requirements vary by semester.</p>
      },
      {
        question: "What housing options are available?",
        content: <p>Baruch College offers various housing options including on-campus residence halls and partnerships with nearby housing facilities. Students can apply for housing through the housing portal on our website.</p>
      }
    ],
    className: '-mx-2'
  }
};
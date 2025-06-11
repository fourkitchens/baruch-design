import Blockquote from '../components/blockquote';

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <div className="prose lg:prose-lg mx-auto">
          <Story />
        </div>
      </>
    ),
  ],
};

export const Default = {
  args: {
    children: 'This is a sample blockquote text that demonstrates how the component looks.',
  },
};

export const LongText = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}; 
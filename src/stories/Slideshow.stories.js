import Slideshow from '../components/slideshow';

export default {
  title: 'Components/Slideshow',
  component: Slideshow,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="max-w-3xl mx-auto mt-10">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Slideshow',
  args: {},
}; 
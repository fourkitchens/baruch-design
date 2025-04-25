import HeaderMinimal from "../components/headerMinimal";

export default {
  title: 'Deprecated/Header Options',
  component: HeaderMinimal,
  decorators: [
    (Story) => (
      <div className="min-h-[200vh]">
        <Story />
      </div>
    ),
  ],
};

export const Header2 = {
  name: 'Option 2',
};

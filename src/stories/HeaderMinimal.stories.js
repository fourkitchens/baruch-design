import HeaderMinimal from "../components/headerMinimal";

export default {
  title: 'Deprecated/Header Minimal',
  component: HeaderMinimal,
  decorators: [
    (Story) => (
      <div className="min-h-[200vh]">
        <Story />
      </div>
    ),
  ],
};

export const HeaderMinimal1 = {
  name: 'Header Minimal',
};

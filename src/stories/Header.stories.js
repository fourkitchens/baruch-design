import Header from "../components/header";

export default {
  title: 'Layout/Header',
  component: Header,
  args: {
    tagline: false,
    grit: true,
  },
  argTypes: {
    tagline: {
      control: 'boolean',
      defaultValue: false,
    },
    grit: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export const Header1 = {
  name: 'Header',
};

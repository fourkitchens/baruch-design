import BaruchLogo from "@/assets/logos/BaruchLogo";

export default {
  title: 'Home',
  component: BaruchLogo,
  decorators: [
    (Story) => (
      <div className="bg-primary-indigo text-primary-white flex flex-row justify-center items-center min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export const Home = {
  name: 'Home',
  args: {
    className: 'w-[500px] h-auto',
  },
};
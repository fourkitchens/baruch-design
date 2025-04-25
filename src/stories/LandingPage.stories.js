import Zicklin from "@/templates/zicklin";

export default {
  title: 'Templates/Landing Pages', 
  component: Zicklin,
  decorators: [
    (Story) => (
      <div className="min-h-[700vh]">
        <Story />
      </div>
    ),
  ],
};

export const LandingPageZicklin = {
  name: 'Zicklin',
};

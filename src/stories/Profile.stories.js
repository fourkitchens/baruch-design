import Profile from "@/templates/profile.js";

export default {
  title: 'Templates/Profiles/Single Profile', 
  component: Profile,
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};

export const BasicPageProfile = {
  name: 'Single Profile',
};

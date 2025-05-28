import Profile from "@/templates/profile.js";

export default {
  title: 'Templates/Profiles/Profile', 
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
  name: 'Profile',
};

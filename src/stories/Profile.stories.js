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
  parameters: {
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-61',
    }
  }
};

export const BasicPageProfile = {
  name: 'Single Profile',
};

import ProfileListResults from "@/templates/profileListResults.js";

export default {
  title: 'Templates/Profiles/Profile List', 
  component: ProfileListResults,
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
  parameters: {
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-166',
    }
  }
};

export const BasicPageProfileListResults = {
  name: 'Profile List Results',
};

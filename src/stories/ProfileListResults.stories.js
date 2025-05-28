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
};

export const BasicPageProfileListResults = {
  name: 'Profile List Results',
};

import ProfileList from "@/templates/profileList.js";

export default {
  title: 'Templates/Profiles/Profile List', 
  component: ProfileList,
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};

export const BasicPageProfileList = {
  name: 'Profile List',
};

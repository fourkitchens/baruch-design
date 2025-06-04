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
  parameters: {
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-166',
    }
  }
};

export const BasicPageProfileList = {
  name: 'Profile List',
};

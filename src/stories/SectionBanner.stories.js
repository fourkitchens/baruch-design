import SectionBanner from "../components/sectionBanner";

export default {
  title: 'Components/Section Banner',
  component: SectionBanner,
  parameters: {
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-68',
    }
  }
};

export const SectionBannerTemplate = {
  name: 'Section Banner',
  args: {
    organizationalDescriptor: 'Office of the',
    title: 'President',
  },
};

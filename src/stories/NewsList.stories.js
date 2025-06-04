import NewsList from '@/app/basic/news-list/page';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  title: 'Templates/News/News List',
  component: NewsList,
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
  parameters: {
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-60',
    }
  }
};

export const Default = {
  name: 'News List',
  args: {},
}; 
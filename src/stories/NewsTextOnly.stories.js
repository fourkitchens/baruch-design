import NewsTextOnly from '@/app/basic/news/text-only/page.js';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  title: 'Templates/News/News Text Only',
  component: NewsTextOnly,
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
  name: 'News Text Only',
  args: {},
}; 
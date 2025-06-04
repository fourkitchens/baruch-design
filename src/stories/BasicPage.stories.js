import BasicPage from "@/app/basic/page.js";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  title: 'Templates/Basic Pages/Basic page', 
  component: BasicPage,
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
  // parameters: {
  //   clickup: {
  //     url: 'https://app.clickup.com/t/36718269/BARUCH-43',
  //   }
  // }
};

export const BasicPageTemplate = {
  name: 'Basic page',
};

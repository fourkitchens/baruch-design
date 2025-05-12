import Cabinet from "@/app/basic/cabinet/page.js";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  title: 'Templates/Basic Pages/Cabinet', 
  component: Cabinet,
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export const BasicPageCabinet = {
  name: 'Cabinet',
};

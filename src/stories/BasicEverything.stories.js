import BasicEverything from "@/app/basic/everything/page.js";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  title: 'Templates/Basic Pages/Everything', 
  component: BasicEverything,
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

export const BasicEverythingTemplate = {
  name: 'Everything',
};

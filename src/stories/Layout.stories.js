import LayoutPage from "@/components/layoutPage";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  title: 'Layout/Page Content',
  component: LayoutPage,
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
  args: {
    children: <div className="border-2 border-fuchsia-500 border-dashed min-h-[70vh]">Commonly used for blog posts, articles, and other content.</div>,
  },
  argTypes: {
    children: {
      control: 'object',
      description: 'The content of the page',
    },
    wide: {
      control: 'boolean',
      description: 'Whether the page is wide',
    },
    sidebar: {
      control: 'object',
      description: 'The sidebar of the page',
    },
  },
};

export const LayoutTemplate = {
  name: 'Page Content Narrow',
  args: {
    children: <div className="border-2 border-fuchsia-500 border-dashed min-h-[70vh]">Commonly used for blog posts, articles, and other content.</div>,
  },
};

export const LayoutWithSidebar = {
  name: 'Page Content Sidebar',
  args: {
    children: <div className="border-2 border-fuchsia-500 border-dashed min-h-[70vh]">Content area</div>,
    sidebar: <div className="border-2 border-fuchsia-500 border-dashed min-h-[70vh]">Sidebar</div>,
  },
};

export const LayoutTemplateWide  = {
  name: 'Page Content Wide',
  args: {
    children: <div className="border-2 border-fuchsia-500 border-dashed min-h-[70vh]">Content area</div>,
    wide: true,
  },
};
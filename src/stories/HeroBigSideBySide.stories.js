import HeroBigSideBySide from "@/components/heroBigSideBySide";
import photo from "@/assets/images/UNA-USA-Fellow_.gif";
import Button from "@/components/button";

export default {
  title: 'Components/HeroBigSideBySide',
  component: HeroBigSideBySide,
};

export const Default = {
  args: {
    title: "Welcome to Baruch College",
    content: "Empowering students to achieve their academic and professional goals through excellence in teaching, research, and service.",
    date: "March 15, 2024",
    image: photo
  }
};

export const WithoutDate = {
  args: {
    title: "Welcome to Baruch College",
    content: "Empowering students to achieve their academic and professional goals through excellence in teaching, research, and service.",
    image: photo
  }
};

export const BlueBackground = {
  args: {
    title: "Welcome to Baruch College",
    content: "Empowering students to achieve their academic and professional goals through excellence in teaching, research, and service.",
    date: "March 15, 2024",
    image: photo,
    backgroundColor: "bg-primary-cuny-blue"
  }
};

export const CustomTypography = {
  args: {
    title: "Welcome to Baruch College",
    content: "Empowering students to achieve their academic and professional goals through excellence in teaching, research, and service.",
    date: "March 15, 2024",
    image: photo,
    titleClassName: "text-pretty text-6xl font-bold leading-tight tracking-tight  text-secondary-taxi",
    contentClassName: "mt-4 text-pretty text-lg font-light text-white/90"
  }
};

export const WithBreadcrumbs = {
  args: {
    title: "Welcome to Baruch College",
    content: "Empowering students to achieve their academic and professional goals through excellence in teaching, research, and service.",
    image: photo,
    breadcrumbs: (
      <nav className="mb-4">
        <ol className="flex items-center space-x-2 text-sm text-white/80">
          <li>Home</li>
          <li>/</li>
          <li>About</li>
        </ol>
      </nav>
    )
  }
};

export const WithAdditionalContent = {
  args: {
    title: "Welcome to Baruch College",
    content: "Empowering students to achieve their academic and professional goals through excellence in teaching, research, and service.",
    date: "March 15, 2024",
    image: photo,
    additionalContent: (
      <div className="mt-8">
        <Button type="cuny-blue">
          Learn More
        </Button>
      </div>
    )
  }
}; 
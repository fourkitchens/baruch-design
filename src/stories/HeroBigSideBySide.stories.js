import HeroBigSideBySide from "@/components/heroBigSideBySide";
import photo from "@/assets/images/UNA-USA-Fellow_.gif";

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
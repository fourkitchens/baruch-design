import ProfileCard from "@/components/profileCard";
import photo from "@/assets/images/profiles/Schwartz-Anne.jpg"

export default {
  title: 'Components/Profile Card',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const WithImage = {
  args: {
    profile: {
      name: "Dr. Jane Smith",
      title: "Professor of Business",
      school: "Zicklin School of Business",
      department: "Department of Management",
      image: photo
    }
  }
};

export const WithoutImage = {
  args: {
    profile: {
      name: "Dr. John Doe",
      title: "Associate Professor",
      school: "Weissman School of Arts and Sciences",
      department: "Department of English",
    }
  }
}; 
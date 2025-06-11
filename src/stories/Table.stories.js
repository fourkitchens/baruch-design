import Table from '../components/table';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-[80vw] mx-auto">
        <Story />
      </div>
    ),
  ],
};

const sampleColumns = [
  { key: 'name', header: 'Name' },
  { key: 'title', header: 'Title' },
  { key: 'department', header: 'Department' },
];

const sampleData = [
  {
    name: 'John Smith',
    title: 'Professor',
    department: 'Computer Science',
  },
  {
    name: 'Sarah Johnson',
    title: 'Associate Professor',
    department: 'Mathematics',
  },
  {
    name: 'Michael Brown',
    title: 'Assistant Professor',
    department: 'Physics',
  },
];

export const Default = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};
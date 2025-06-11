import Breadcrumbs from '../components/breadcrumbs'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({})
Default.args = {
  pages: [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
  ],
}

export const LongPath = Template.bind({})
LongPath.args = {
  pages: [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: false },
    { name: 'Documents', href: '#', current: false },
    { name: 'Design Files', href: '#', current: true },
  ],
}

export const SingleLevel = Template.bind({})
SingleLevel.args = {
  pages: [
    { name: 'Projects', href: '#', current: true },
  ],
} 
import Button from "../components/button";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['sky', 'ghost', 'cuny-blue', 'tangerine'],
      description: 'The button style variant'
    },
    size: {
      control: 'select',
      options: ['lg', ''],
      description: 'The button size'
    },
    href: {
      control: 'text',
      description: 'The link destination'
    },
    children: {
      control: 'text',
      description: 'The button text'
    }
  },
  parameters: {
    layout: 'grid',
    grid: {
      cellSize: 200,
      cellPadding: 16,
      columns: 2
    }
  },
  args: {
    children: 'Button',
    href: '#',
    type: 'cuny-blue',
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const Sky = {
  args: {
    type: 'sky',
    children: 'Sky Button'
  }
};

export const Ghost = {
  args: {
    type: 'ghost',
    children: 'Ghost Button'
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen flex items-center justify-center bg-neutral-slate">
        <Story />
      </div>
    ),
  ],
};

export const CunyBlue = {
  args: {
    type: 'cuny-blue',
    children: 'CUNY Blue Button'
  }
};

export const Tangerine = {
  args: {
    type: 'tangerine',
    children: 'Tangerine Button'
  }
};

export const Large = {
  args: {
    size: 'lg',
    children: 'Large Button'
  }
};

export const Base = {
  args: {
    size: '',
    children: 'Base Button'
  }
};

import Marxe from '../templates/marxe';

export default {
  title: 'Templates/Landing Pages/Marxe',
  component: Marxe,
  parameters: {
    layout: 'fullscreen',
    clickup: {
      url: 'https://app.clickup.com/t/36718269/BARUCH-114',
    }
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Marxe',
  args: {
    stats: [
      {
        id: 4,
        header: '#1',
        subhead: 'Full-Time MBA in New York City & New York State Among Public Institutions',
        attribution: '2024 U.S. News & World Report'
      },
      {
        id: 5,
        header: '#1',
        subhead: 'Evening MBA Program in New York City & New York State Among Public Institutions',
        attribution: '2024 U.S. News & World Report'
      },
      {
        id: 6,
        header: '#1',
        subhead: 'Accounting MBA Program in New York City & New York State Among Public Institutions',
        attribution: '2024 U.S. News & World Report'
      }
    ]
  }
}; 
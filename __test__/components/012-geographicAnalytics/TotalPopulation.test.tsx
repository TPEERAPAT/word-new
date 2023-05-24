// @ts-nocheck
import '@testing-library/jest-dom';

import TotalPopulation from '@components/012-geographicHealth/TotalPopulation';
import { render, screen } from '@testing-library/react';

describe('Check @components/02-geographicHealth/TotalPopulation', () => {
  const testData = [
    {
      name: 'Nonthaburi',
      healthStatus: {
        good: {
          amount: 12000,
          percent: 33,
        },
        warn: {
          amount: 18000,
          percent: 50,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
    {
      name: 'Bangkok',

      healthStatus: {
        good: {
          amount: 6000,
          percent: 17,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 18000,
          percent: 50,
        },
      },
    },
    {
      name: 'Samut Prakan',

      healthStatus: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
    {
      name: 'Samut Sakhon',

      healthStatus: {
        good: {
          amount: 6000,
          percent: 17,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 18000,
          percent: 50,
        },
      },
    },
    {
      name: 'Samut Songkhram',

      healthStatus: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
  ];

  it('Check Thai Label Text', async () => {
    render(<TotalPopulation data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'จำนวนประชากรทั้งหมด'
    );
  });

  it('Check English Label Text', async () => {
    render(<TotalPopulation data={testData} />);
    expect(screen.getAllByText('(Total population)')[0]).toBeInTheDocument();
  });

  it('Check Amount Number', async () => {
    render(<TotalPopulation data={testData} />);
    expect(screen.getAllByText('180,000 คน')[0]).toBeInTheDocument();
    expect(screen.getAllByText('180,000 คน')[0]).toHaveClass('text-blueOcare');
  });
});

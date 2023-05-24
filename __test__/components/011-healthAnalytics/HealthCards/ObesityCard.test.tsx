// @ts-nocheck
import '@testing-library/jest-dom';

import ObesityCard from '@components/011-healthDashboard/HealthCards/KidneyCard';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HealthCards/ObesityCard', () => {
  window.ResizeObserver = function resizeObserver() {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  };

  const testData = {
    overall: { amount: 39900, percent: 33 },
    type1: { amount: 2000, percent: 33 },
    type2: { amount: 1000, percent: 16 },
    type3: { amount: 1000, percent: 16 },
    type4: { amount: 1000, percent: 16 },
    type5: { amount: 500, percent: 8 },
    type6: { amount: 500, percent: 8 },
  };

  it('Check Thai Label Text', async () => {
    render(<ObesityCard data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('โรคอ้วน');
  });

  it('Check English Label Text', async () => {
    render(<ObesityCard data={testData} />);
    expect(screen.getAllByText('(Obesity)')[0]).toBeInTheDocument();
  });

  it('Check Overall Number', async () => {
    render(<ObesityCard data={testData} />);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('39,900 คน');
  });
});

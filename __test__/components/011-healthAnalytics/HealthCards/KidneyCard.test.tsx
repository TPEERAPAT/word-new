// @ts-nocheck
import '@testing-library/jest-dom';

import KidneyCard from '@components/011-healthDashboard/HealthCards/ObesityCard';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HealthCards/KidneyCard', () => {
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
    type2: { amount: 1600, percent: 27 },
    type3: { amount: 1200, percent: 20 },
    type4: { amount: 800, percent: 13 },
    type5: { amount: 400, percent: 7 },
  };

  it('Check Thai Label Text', async () => {
    render(<KidneyCard data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'การทำงานของไต'
    );
  });

  it('Check English Label Text', async () => {
    render(<KidneyCard data={testData} />);
    expect(
      screen.getAllByText('(Kidney Function Test)')[0]
    ).toBeInTheDocument();
  });

  it('Check Overall Number', async () => {
    render(<KidneyCard data={testData} />);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('39,900 คน');
  });
});

// @ts-nocheck
import '@testing-library/jest-dom';

import DiabetesCard from '@components/011-healthDashboard/HealthCards/DiabetesCard';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HealthCards/DiabetesCard', () => {
  window.ResizeObserver = function resizeObserver() {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  };

  const testData = {
    overall: { amount: 39900, percent: 33 },
    type1: { amount: 2000, percent: 30 },
    type2: { amount: 2000, percent: 30 },
    type3: { amount: 1500, percent: 23 },
    type4: { amount: 1000, percent: 15 },
  };

  it('Check Thai Label Text', async () => {
    render(<DiabetesCard data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('เบาหวาน');
  });

  it('Check English Label Text', async () => {
    render(<DiabetesCard data={testData} />);
    expect(screen.getAllByText('(Diabetes)')[0]).toBeInTheDocument();
  });

  it('Check Overall Number', async () => {
    render(<DiabetesCard data={testData} />);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('39,900 คน');
  });
});

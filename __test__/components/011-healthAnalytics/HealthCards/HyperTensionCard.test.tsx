// @ts-nocheck
import '@testing-library/jest-dom';

import HyperTensionCard from '@components/011-healthDashboard/HealthCards/HyperTensionCard';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HealthCards/HyperTensionCard', () => {
  window.ResizeObserver = function resizeObserver() {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  };

  const testData = {
    overall: { amount: 39900, percent: 33 },
    type1: { amount: 2000, percent: 23 },
    type2: { amount: 2000, percent: 23 },
    type3: { amount: 1500, percent: 17 },
    type4: { amount: 1800, percent: 20 },
    type5: { amount: 1500, percent: 17 },
  };

  it('Check Thai Label Text', async () => {
    render(<HyperTensionCard data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'ความดันโลหิตสูง'
    );
  });

  it('Check English Label Text', async () => {
    render(<HyperTensionCard data={testData} />);
    expect(screen.getAllByText('(Hypertension)')[0]).toBeInTheDocument();
  });

  it('Check Overall Number', async () => {
    render(<HyperTensionCard data={testData} />);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('39,900 คน');
  });
});

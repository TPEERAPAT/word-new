// @ts-nocheck
import '@testing-library/jest-dom';

import Tooltips from '@components/011-healthDashboard/InformationCards/Tooltips';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HeadSection', () => {
  const testData = {
    amount: 1000,
    percent: 20,
    color: 'bg-greenOcare',
    label: '41-50 ปี',
  };

  it('Check Tooltips Render', async () => {
    render(
      <Tooltips
        top={`${testData.percent - 150}%`}
        left="-33px"
        color={testData.color}
        label={testData.label}
        text={`${testData.amount} คน (${testData.percent}%)`}
      />
    );

    // Title
    expect(screen.getAllByText('41-50 ปี')[0]).toBeInTheDocument();

    // Details
    expect(screen.getAllByText('1000 คน (20%)')[0]).toBeInTheDocument();
  });
});

// @ts-nocheck
import '@testing-library/jest-dom';

import AgeCard from '@components/011-healthDashboard/InformationCards/AgeCard';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HeadSection', () => {
  const testData = {
    range1: { amount: 2500, percent: 25 },
    range2: { amount: 5000, percent: 50 },
    range3: { amount: 8000, percent: 80 },
    range4: { amount: 4000, percent: 40 },
    range5: { amount: 6000, percent: 60 },
  };

  it('Check Header', async () => {
    render(<AgeCard data={testData} />);
    expect(screen.getAllByText('ช่วงอายุ')[0]).toBeInTheDocument();
    expect(screen.getAllByText('(Age range)')[0]).toBeInTheDocument();
  });
});

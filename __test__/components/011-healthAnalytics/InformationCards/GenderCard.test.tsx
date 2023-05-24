// @ts-nocheck
import '@testing-library/jest-dom';

import GenderCard from '@components/011-healthDashboard/InformationCards/GenderCard';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HeadSection', () => {
  const testData = {
    male: { amount: 560, percent: 56 },
    female: { amount: 440, percent: 44 },
  };

  it('Check Header', async () => {
    render(<GenderCard data={testData} />);
    expect(screen.getAllByText('เพศ')[0]).toBeInTheDocument();
    expect(screen.getAllByText('(gender)')[0]).toBeInTheDocument();
  });

  it('Check Content', async () => {
    render(<GenderCard data={testData} />);

    // ชาย
    expect(screen.getAllByText('ชาย')[0]).toBeInTheDocument();
    expect(screen.getAllByText('56%')[0]).toBeInTheDocument();
    expect(screen.getAllByText('560 คน')[0]).toBeInTheDocument();

    // หญิง
    expect(screen.getAllByText('หญิง')[0]).toBeInTheDocument();
    expect(screen.getAllByText('44%')[0]).toBeInTheDocument();
    expect(screen.getAllByText('440 คน')[0]).toBeInTheDocument();
  });
});

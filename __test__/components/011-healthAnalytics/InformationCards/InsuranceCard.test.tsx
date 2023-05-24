// @ts-nocheck
import '@testing-library/jest-dom';

import InsuranceCard from '@components/011-healthDashboard/InformationCards/InsuranceCard';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HeadSection', () => {
  const testData = {
    type1: { amount: 4000, percent: 40 },
    type2: { amount: 6000, percent: 60 },
    type3: { amount: 8000, percent: 80 },
    type4: { amount: 2500, percent: 25 },
  };

  it('Check Header', async () => {
    render(<InsuranceCard data={testData} />);
    expect(screen.getAllByText('สิทธิการรักษา')[0]).toBeInTheDocument();
    expect(screen.getAllByText('(Insurance)')[0]).toBeInTheDocument();
  });

  it('Check Content', async () => {
    render(<InsuranceCard data={testData} />);

    expect(screen.getAllByText('ข้าราชการ')[0]).toBeInTheDocument();
    expect(screen.getAllByText('ประกันสังคม')[0]).toBeInTheDocument();
    expect(screen.getAllByText('ชำระเงินเอง')[0]).toBeInTheDocument();
    expect(screen.getAllByText('บัตรทอง')[0]).toBeInTheDocument();
  });
});

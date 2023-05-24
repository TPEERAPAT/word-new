// @ts-nocheck
import '@testing-library/jest-dom';

import HealthStatusCard from '@components/011-healthDashboard/HealthCards/HealthStatusCard';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HealthCards/HealthStatusCard', () => {
  const testData = {
    dangerous: { amount: 14000, percent: 20 },
    warn: { amount: 21000, percent: 30 },
    good: { amount: 35000, percent: 50 },
  };

  it('Check Header', async () => {
    render(<HealthStatusCard data={testData} />);
    expect(screen.getAllByText('สภาวะสุขภาพ')[0]).toBeInTheDocument();
    expect(screen.getAllByText('(Health Status)')[0]).toBeInTheDocument();
  });

  it('Check Dangerous', async () => {
    render(<HealthStatusCard data={testData} />);
    expect(screen.getAllByText('สุขภาพมีปัญหา')[0]).toBeInTheDocument();
  });

  it('Check Warn', async () => {
    render(<HealthStatusCard data={testData} />);
    expect(screen.getAllByText('มีความเสี่ยงสุขภาพ')[0]).toBeInTheDocument();
  });

  it('Check Good', async () => {
    render(<HealthStatusCard data={testData} />);
    expect(screen.getAllByText('สุขภาพปกติ')[0]).toBeInTheDocument();
  });
});

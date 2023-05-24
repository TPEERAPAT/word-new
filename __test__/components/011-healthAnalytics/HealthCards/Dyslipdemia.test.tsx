// @ts-nocheck
import '@testing-library/jest-dom';

import Dyslipdemia from '@components/011-healthDashboard/HealthCards/Dyslipdemia';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HealthCards/Dyslipdemia', () => {
  const testData = {
    overall: { amount: 39900, percent: 33 },
    cholesterol: { amount: 5900, percent: 70 },
    triglyceride: { amount: 2560, percent: 40 },
    goodfat: { amount: 3809, percent: 60 },
    badfat: { amount: 1060, percent: 20 },
  };

  it('Check Thai Label Text', async () => {
    render(<Dyslipdemia data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'ไขมันในเลือดผิดปกติ'
    );
  });

  it('Check English Label Text', async () => {
    render(<Dyslipdemia data={testData} />);
    expect(screen.getAllByText('(Dyslipidemia)')[0]).toBeInTheDocument();
  });

  it('Check Overall Number', async () => {
    render(<Dyslipdemia data={testData} />);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('39,900 คน');
  });
});

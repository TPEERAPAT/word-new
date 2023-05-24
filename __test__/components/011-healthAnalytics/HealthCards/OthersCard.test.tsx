// @ts-nocheck
import '@testing-library/jest-dom';

import OthersCard from '@components/011-healthDashboard/HealthCards/OthersCard';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HealthCards/OthersCard', () => {
  const testData = {
    other1: { amount: 1900, percent: 40 },
    other2: { amount: 5900, percent: 80 },
    other3: { amount: 3900, percent: 50 },
    other4: { amount: 900, percent: 20 },
  };

  it('Check Header', async () => {
    render(<OthersCard data={testData} />);
    expect(screen.getAllByText('โรคอื่นๆ')[0]).toBeInTheDocument();
    expect(screen.getAllByText('(Others Disease)')[0]).toBeInTheDocument();
  });

  it('Check Anemia', async () => {
    render(<OthersCard data={testData} />);
    expect(screen.getAllByText('เลือดจาง')[0]).toBeInTheDocument();
  });

  it('Check Gout', async () => {
    render(<OthersCard data={testData} />);
    expect(screen.getAllByText('เกาต์')[0]).toBeInTheDocument();
  });

  it('Check Osteoporosis', async () => {
    render(<OthersCard data={testData} />);
    expect(screen.getAllByText('กระดูกพรุน')[0]).toBeInTheDocument();
  });

  it('Check Myopia', async () => {
    render(<OthersCard data={testData} />);
    expect(screen.getAllByText('สายตาสั้น')[0]).toBeInTheDocument();
  });
});

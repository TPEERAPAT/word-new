// @ts-nocheck
import '@testing-library/jest-dom';

import PopulationCard from '@components/011-healthDashboard/InformationCards/PopulationCard';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HeadSection', () => {
  const testData = 7000000;

  it('Check Thai Label Text', async () => {
    render(<PopulationCard data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'จำนวนประชากรทั้งหมด'
    );
  });

  it('Check English Label Text', async () => {
    render(<PopulationCard data={testData} />);
    expect(screen.getAllByText('(Total population)')[0]).toBeInTheDocument();
  });

  it('Check Amount Number', async () => {
    render(<PopulationCard data={testData} />);
    expect(screen.getAllByText('7,000,000')[0]).toBeInTheDocument();
    expect(screen.getAllByText('7,000,000')[0]).toHaveClass('text-blueOcare');
  });
});

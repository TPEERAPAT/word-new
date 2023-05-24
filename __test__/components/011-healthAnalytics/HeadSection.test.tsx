// @ts-nocheck
import HeadSection from '@components/011-healthDashboard/HeadSection';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HeadSection', () => {
  it('Check Label Render', async () => {
    render(<HeadSection label="Test Head Section" />);

    expect(await screen.findByText(/Test Head Section/i)).toBeInTheDocument();
  });
});

// @ts-nocheck
import '@testing-library/jest-dom';

import Condition from '@components/011-healthDashboard/HealthCards/Condition';
import { render, screen } from '@testing-library/react';

describe('Check @components/011-healthDashboard/HealthCards/Condition', () => {
  it('Check Label with Color', async () => {
    render(<Condition label="ปกติ" color="greenOcare" />);

    const textElement = screen.getAllByText('ปกติ')[0];
    // eslint-disable-next-line testing-library/no-node-access
    const colorElement = textElement?.parentElement?.children[0];

    // Check text
    expect(textElement).toBeInTheDocument();
    // Check color
    expect(colorElement).toHaveClass('bg-greenOcare');
  });
});

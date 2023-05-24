// @ts-nocheck
import '@testing-library/jest-dom';

import Status from '@components/011-healthDashboard/HealthCards/Status';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Check @components/011-healthDashboard/HealthCards/Status', () => {
  it('Check Vertical Orentation With Amount', async () => {
    render(
      <Status
        color="greenOcare"
        percent={20}
        amount={'1000'}
        status="ปกติ"
        left={-20}
      />
    );

    // Status
    const statusElement = screen.getByTestId('status-test');
    expect(statusElement).toHaveClass('bg-greenOcare');

    // Tooltip will show after hover
    await userEvent.hover(statusElement);
    const tooltipsElement = screen.getByTestId('status-tooltips-test');
    expect(tooltipsElement).toBeInTheDocument();

    // Tooltip will hide after moveout
    await userEvent.unhover(statusElement);
    expect(tooltipsElement).not.toBeInTheDocument();
  });
});

// @ts-nocheck
import ButtonMain from '@components/011-healthDashboard/Button/ButtonMain';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Check @components/011-healthDashboard/Button/ButtonMain', () => {
  it('Check It Can Render', async () => {
    render(<ButtonMain />);
    // Check render properly
    expect(screen.getByTestId('main-button-test')).toBeInTheDocument();
  });

  it('Check Lebel Render', async () => {
    render(<ButtonMain />);
    // Check text label
    expect(screen.getByTestId('main-button-test')).toHaveTextContent(
      'หน่วยงานหลักทั้งหมด'
    );
  });

  it('Check Clicking', async () => {
    render(<ButtonMain />);

    // Click on button
    await userEvent.click(screen.getByTestId('main-button-test'));

    // Check if selection button is shown
    expect(screen.getByTestId('main-button-list-test')).toBeInTheDocument();
  });
});

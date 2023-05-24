// @ts-nocheck
import ButtonDropdown from '@components/011-healthDashboard/Button/ButtonDropdown';
import { render, screen } from '@testing-library/react';
import { IoCaretDown } from 'react-icons/io5';

describe('Check @components/011-healthDashboard/Button/ButtonDropdown', () => {
  it('Check Label Render', async () => {
    render(<ButtonDropdown name="ทดสอบ" icon={IoCaretDown} />);

    // Check render text
    expect(await screen.findByText(/ทดสอบ/i)).toBeInTheDocument();

    // Check is it button
    expect(await screen.findByRole('button')).toHaveTextContent('ทดสอบ');
  });

  it('Check Icon Render', async () => {
    render(<ButtonDropdown name="ทดสอบ" icon={IoCaretDown} />);

    const button = await screen.findByRole('button');

    // eslint-disable-next-line testing-library/no-node-access
    expect(button.children[0]?.tagName).toBe('svg');
  });
});

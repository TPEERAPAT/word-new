// @ts-nocheck
import ProvinceHealthStatus from '@components/012-geographicHealth/ProvinceHealthStatus';
import { render, screen } from '@testing-library/react';

describe('Check @components/02-geographicHealth/ProvinceHealthStatus', () => {
  it('Check Province Label Render', async () => {
    render(
      <ProvinceHealthStatus
        name={'กรุงเทพมหานคร'}
        percent={50}
        amount={18000}
        color="redOcare"
      />
    );

    expect(await screen.findByText(/กรุงเทพมหานคร/i)).toBeInTheDocument();
  });

  it('Check Amount And Persent Render', async () => {
    render(
      <ProvinceHealthStatus
        name={'กรุงเทพมหานคร'}
        percent={50}
        amount={18000}
        color="redOcare"
      />
    );

    expect(await screen.findByText(/18,000 คน/i)).toBeInTheDocument();
    expect(await screen.findByText(/(50%)/i)).toBeInTheDocument();
  });

  it('Check Color Render', async () => {
    render(
      <ProvinceHealthStatus
        name={'กรุงเทพมหานคร'}
        percent={50}
        amount={18000}
        color="redOcare"
      />
    );

    const element = await screen.findByText(/กรุงเทพมหานคร/i);

    // eslint-disable-next-line testing-library/no-node-access
    expect(element.parentElement?.children[0]).toHaveClass('bg-redOcare');
  });
});

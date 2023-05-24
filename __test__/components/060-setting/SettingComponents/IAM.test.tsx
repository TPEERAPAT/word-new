// @ts-nocheck
import '@testing-library/jest-dom';

import IAMAccessManagement from '@components/060-setting/SettingComponents/IAMAccessManagement';
import { render, screen } from '@testing-library/react';

describe('Check @components/060-setting/SettingComponents/IAMAccessManagement', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <IAMAccessManagement onShowModal={() => {}} onServiceValue={() => {}} />
    );
  });

  it('Check component is valid', async () => {
    const iamNotFound = screen.getByText(/I AM not found/i);
    expect(iamNotFound).toBeInTheDocument();

    const reset = screen.getByText(/Reset Default/i);
    expect(reset).toBeInTheDocument();

    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
  });

  it('Check submit console is valid', async () => {
    const reset = screen.getByText(/Reset Default/i);
    expect(reset).toBeInTheDocument();

    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
  });
});

// @ts-nocheck
import '@testing-library/jest-dom'; // Import jest-dom typings

import WhitelistIP from '@components/060-setting/SettingComponents/WhitelistIP';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('@components/060-setting/SettingComponents/WhitelistIP', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<WhitelistIP />);
  });

  it('Check component is valid', async () => {
    const limitedButton = screen.getByText(/Limited/i);
    expect(limitedButton).toBeInTheDocument();

    const IP = screen.getByText(/IP/i);
    expect(IP).toBeInTheDocument();

    const action = screen.getByText(/action/i);
    expect(action).toBeInTheDocument();

    const addButton = screen.getByText(/add/i);
    expect(addButton).toBeInTheDocument();

    const inputIp = screen.getByPlaceholderText(/insert ip/i);
    expect(inputIp).toBeInTheDocument();
  });

  it('Check submit console is valid', async () => {
    const reset = screen.getByText(/Reset Default/i);
    expect(reset).toBeInTheDocument();

    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
  });
});

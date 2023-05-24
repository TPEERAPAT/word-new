// @ts-nocheck
import '@testing-library/jest-dom';

import Connectivities from '@components/060-setting/SettingComponents/Connectivities';
import { render, screen } from '@testing-library/react';

describe('@components/060-setting/SettingComponents/Connectivities', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Connectivities onShowModal={() => {}} onServiceValue={() => {}} />);
  });

  it('Check component is valid', async () => {
    const APINotFound = screen.getByText(/API Services not found/i);
    expect(APINotFound).toBeInTheDocument();

    const smptEmail = screen.getByText(/SMTP Email not found/i);
    expect(smptEmail).toBeInTheDocument();

    const smsApi = screen.getByText(/SMS API not found/i);
    expect(smsApi).toBeInTheDocument();

    const lineOA = screen.getByText(/LINE Official Account not found/i);
    expect(lineOA).toBeInTheDocument();

    const facebook = screen.getByText(/Facebook not found/i);
    expect(facebook).toBeInTheDocument();
  });

  it('Check submit console is valid', async () => {
    const reset = screen.getByText(/Reset Default/i);
    expect(reset).toBeInTheDocument();

    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
  });
});

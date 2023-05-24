// @ts-nocheck
import '@testing-library/jest-dom';

import GeneralInformation from '@components/060-setting/SettingComponents/GeneralInformation';
import { render, screen } from '@testing-library/react';

describe('Check @components/060-setting/SettingComponents/GeneralInformation', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<GeneralInformation />);
  });

  it('Check component valid', async () => {
    expect(screen.getByText(/Organization logo/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Organization name \(English\)/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/ชื่อองค์กร \(ภาษาไทย\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Organization Accessibility/i)).toBeInTheDocument();
    expect(screen.getByText(/Project objectives/i)).toBeInTheDocument();
    expect(screen.getByText(/Patient Discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/Project access option/i)).toBeInTheDocument();
  });

  it('Check input logo collection to be null', () => {
    const orgaLogo = screen.getByPlaceholderText(/upload/i);
    expect(orgaLogo).toBeInTheDocument();
    expect(orgaLogo.value).toBe('');

    const orgaNameEng = screen.getByPlaceholderText(
      /Insert Organization name/i
    );
    expect(orgaNameEng).toBeInTheDocument();
    expect(orgaNameEng.value).toBe('');

    const organNameThai = screen.getByPlaceholderText(/ระบุชื่อองค์กร/i);
    expect(organNameThai).toBeInTheDocument();
    expect(organNameThai.value).toBe('');
  });
});

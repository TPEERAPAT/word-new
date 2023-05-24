// @ts-nocheck
import '@testing-library/jest-dom';

import SideModal from '@components/060-setting/SideModal';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/060-setting/SettingComponents/GeneralInformation API Service', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SideModal onHideModal={() => {}} serviceValue={'API Services'} />);
  });

  it('Check API Service', async () => {
    const apiServices = screen.getByText(/API Services/i);
    expect(apiServices).toBeInTheDocument();

    const projectObjs = screen.getByText(/Project objectives/i);
    expectVaidComponent(projectObjs);

    const patientsList = screen.getAllByText(/Patient List/i)[0];
    expect(patientsList).toBeInTheDocument();
  });
});

describe('Check @components/060-setting/SettingComponents/GeneralInformation SMTP Email', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SideModal onHideModal={() => {}} serviceValue={'SMTP Email'} />);
  });

  it('Check SMTP Email', () => {
    const SMTPEmail = screen.getByText(/SMTP Email/i);
    expect(SMTPEmail).toBeInTheDocument();

    const nameInput = screen.getByText(/name/i);
    expectVaidComponent(nameInput);

    const passwordInput = screen.getByText(/password/i);
    expectVaidComponent(passwordInput);

    const outgoingServer = screen.getByText(/Outgoing Server/i);
    expectVaidComponent(outgoingServer);

    const portInput = screen.getByText(/port/i);
    expectVaidComponent(portInput);
  });
});

describe('Check @components/060-setting/SettingComponents/GeneralInformation SMS API Server', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SideModal onHideModal={() => {}} serviceValue={'SMS API'} />);
  });

  it('Check SMTP Email', () => {
    const SMSAPI = screen.getByText(/SMS API/i);
    expect(SMSAPI).toBeInTheDocument();

    const onSwitch = screen.getByText(/on/i);
    expectVaidComponent(onSwitch);

    const nameInput = screen.getByText(/name/i);
    expectVaidComponent(nameInput);

    const passwordInput = screen.getByText(/password/i);
    expectVaidComponent(passwordInput);

    const sender = screen.getByText(/sender/i);
    expectVaidComponent(sender);
  });
});

describe('Check @components/060-setting/SettingComponents/GeneralInformation LINE Official Account', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <SideModal
        onHideModal={() => {}}
        serviceValue={'LINE Official Account'}
      />
    );
  });

  it('Check SMTP Email', () => {
    const lineOA = screen.getByText(/LINE Official Account/i);
    expect(lineOA).toBeInTheDocument();

    const onSwitch = screen.getAllByText(/on/i)[0];
    expectVaidComponent(onSwitch);

    const lineUserProfile = screen.getByText(/LINE User Profile/i);
    expectVaidComponent(lineUserProfile);

    const lineMA = screen.getByText(/LINE Messaging API/i);
    expectVaidComponent(lineMA);
  });
});

describe('Check @components/060-setting/SettingComponents/GeneralInformation IAM', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SideModal onHideModal={() => {}} serviceValue={'IAM'} />);
  });

  it('Check IAM', () => {
    const IAM = screen.getByText(/IAM/i);
    expect(IAM).toBeInTheDocument();

    const service = screen.getAllByText(/service/i)[0];
    expectVaidComponent(service!);

    const objectives = screen.getByText(/objectives/i);
    expectVaidComponent(objectives);

    const firstnameInput = screen.getByText(/firstname/i);
    expectVaidComponent(firstnameInput);
  });
});

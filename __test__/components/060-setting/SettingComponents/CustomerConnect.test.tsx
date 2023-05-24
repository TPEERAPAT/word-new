// @ts-nocheck
import '@testing-library/jest-dom';

import CustomerConnect from '@components/060-setting/SettingComponents/CustomerConnect';
import { render, screen } from '@testing-library/react';

describe('Check @components/060-setting/SettingComponents/CustomerConnect', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<CustomerConnect />);
  });

  it('Check radio box is valid', async () => {
    const healthSummary = screen.getByText(/Health Summary/i);
    expect(healthSummary).toBeInTheDocument();

    const allAccessible = screen.getAllByText(/All Accessible/i)[0];
    expect(allAccessible).toBeInTheDocument();

    const identityVerify = screen.getAllByText(/Identity Verified/i)[0];
    expect(identityVerify).toBeInTheDocument();

    const healthReport = screen.getByText(/Health Report/i);
    expect(healthReport).toBeInTheDocument();
  });

  it('Check notification is valid', async () => {
    const notifications = screen.getByText(/Notifications/i);
    expect(notifications).toBeInTheDocument();

    const notificationLists = screen.getByText(/Notification Lists/i);
    expect(notificationLists).toBeInTheDocument();

    const email = screen.getByText(/Email/i);
    expect(email).toBeInTheDocument();

    const sms = screen.getByText(/SMS/i);
    expect(sms).toBeInTheDocument();

    const line = screen.getByText(/Line/i);
    expect(line).toBeInTheDocument();

    const add = screen.getAllByText(/Add/i)[0];
    expect(add).toBeInTheDocument();

    const appointment = screen.getByText(/Appointment/i);
    expect(appointment).toBeInTheDocument();

    const twoDay = screen.getByText(/2-day Prior to arrival/i);
    expect(twoDay).toBeInTheDocument();

    const oneDayArr = screen.getByText(/1-day Prior to arrival/i);
    expect(oneDayArr).toBeInTheDocument();

    const oneDayVisit = screen.getByText(/1-day Post visit/i);
    expect(oneDayVisit).toBeInTheDocument();
  });

  it('Check submit console is valid', async () => {
    const reset = screen.getByText(/Reset Default/i);
    expect(reset).toBeInTheDocument();

    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
  });
});

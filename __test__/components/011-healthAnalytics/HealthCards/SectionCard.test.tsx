// @ts-nocheck
import '@testing-library/jest-dom';

import SectionCard from '@components/011-healthDashboard/HealthCards/SectionCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Check @components/011-healthDashboard/HealthCards/SectionCard', () => {
  const testData = {
    depart: [
      {
        name: 'แผนก1',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก2',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก3',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก4',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก5',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก6',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก7',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก8',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'แผนก9',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
    ],
    aff: [
      {
        name: 'สังกัด1',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด2',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด3',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด4',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด5',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด6',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด7',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด8',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
      {
        name: 'สังกัด9',
        sum: 180,
        good: { amount: 90, percent: 50 },
        warn: { amount: 60, percent: 33 },
        dangerous: { amount: 30, percent: 17 },
      },
    ],
  };

  it('Check Thai Label Text', async () => {
    render(<SectionCard data={testData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
      'ปัญหาสุขภาพแยกตามหน่วยงาน'
    );
  });

  it('Check English Label Text', async () => {
    render(<SectionCard data={testData} />);
    expect(
      screen.getAllByText('(Section-based Health Status)')[0]
    ).toBeInTheDocument();
  });

  it('Check Click On Department', async () => {
    render(<SectionCard data={testData} />);

    // Check text and color of button
    const deparmentButton = screen.getAllByRole('button')[0];
    expect(deparmentButton).toHaveClass('text-greyOcare');
    expect(deparmentButton).toHaveTextContent('แผนก');

    // After clicking the button it will activate
    await userEvent.click(deparmentButton);
    const newDeparmentButton = screen.getAllByRole('button')[0];
    expect(newDeparmentButton).toHaveClass('text-blueOcare');
  });

  it('Check Click On Affiliation', async () => {
    render(<SectionCard data={testData} />);
    const affiliationButton = screen.getAllByRole('button')[1];

    // Check text and color of button
    expect(affiliationButton).toHaveClass('text-blueOcare');
    expect(affiliationButton).toHaveTextContent('สังกัด');

    // After clicking the button it will activate
    await userEvent.click(affiliationButton);
    const newAffiliationButton = screen.getAllByRole('button')[1];
    expect(newAffiliationButton).toHaveClass('text-blueOcare');
  });
});

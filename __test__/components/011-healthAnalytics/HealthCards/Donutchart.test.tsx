// @ts-nocheck
import '@testing-library/jest-dom';

import Donutchart, {
  footerCallback,
  labelCallback,
  titleCallback,
} from '@components/011-healthDashboard/HealthCards/Donutchart';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/011-healthDashboard/HealthCards/Donutchart', () => {
  window.ResizeObserver = function resizeObserver() {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  };

  const testData = {
    label: [
      { name: 'ปกติ', percent: 30 },
      { name: 'เสี่ยงเบาหวาน', percent: 30 },
      { name: 'น้ำตาลต่ำ', percent: 23 },
      { name: 'เบาหวาน', percent: 15 },
    ],
    data: [2000, 2000, 1500, 1000],
    backgroundColor: ['#198C35', '#043673', '#FF9500', '#B1231D'],
  };

  it('Check Canvas Exist', async () => {
    render(<Donutchart datas={testData} />);
    expect(screen.getByRole('img').tagName === 'CANVAS').toBeTruthy();
  });

  it('Check Title Render Function', async () => {
    expect(titleCallback()).toBe('');
  });

  it('Check Label Render Function', async () => {
    expect(
      labelCallback({ dataset: { label: 'Text' }, label: { name: 'ทดสอบ' } })
    ).toBe('Text: ทดสอบ');

    expect(
      labelCallback({ dataset: { label: '' }, label: { name: 'ทดสอบ' } })
    ).toBe('ทดสอบ');
  });

  it('Check Footer Render Function', async () => {
    expect(footerCallback([{ parsed: 'Test', label: { percent: 10 } }])).toBe(
      'Test คน (10%)'
    );
  });
});

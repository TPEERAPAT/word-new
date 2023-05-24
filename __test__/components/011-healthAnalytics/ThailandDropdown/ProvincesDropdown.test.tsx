// @ts-nocheck
import '@testing-library/jest-dom';

import ProvincesDropdown from '@components/011-healthDashboard/ThailandDropdown/ProvincesDropdown';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/011-healthDashboard/ThailandDropdown/ProvinceDropdown', () => {
  render(
    <ProvincesDropdown
      onToggleDistrictHandler={() => {}}
      onProvinceValueHandler={() => {}}
      province={{
        NameEN: 'Chiang Mai',
        NameTH: 'เชียงใหม่',
        id: 38,
        isChecked: false,
      }}
    />
  );

  // eslint-disable-next-line jest/expect-expect
  it('Check component is valid', () => {
    const provinceCheck = screen.getByText(/เชียงใหม่/i);
    expectVaidComponent(provinceCheck);
  });
});

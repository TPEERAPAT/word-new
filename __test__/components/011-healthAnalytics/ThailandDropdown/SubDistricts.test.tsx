// @ts-nocheck
import '@testing-library/jest-dom';

import SubDistrictDropdown from '@components/011-healthDashboard/ThailandDropdown/SubDistrictDropdown';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/011-healthDashboard/ThailandDropdown/subDistrictInThailand', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <SubDistrictDropdown
        onSubDistrictValueHandler={() => {}}
        subDistrict={{
          NameEN: 'Phra Borom Maha Ratchawang',
          NameTH: 'พระบรมมหาราชวัง',
          id: 100101,
          isChecked: false,
        }}
      />
    );
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check component is valid', () => {
    const subDistrictCheck = screen.getByText(/พระบรมมหาราชวัง/i);
    expectVaidComponent(subDistrictCheck);
  });
});

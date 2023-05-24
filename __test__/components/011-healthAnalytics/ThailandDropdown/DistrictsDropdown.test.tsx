// @ts-nocheck
import '@testing-library/jest-dom';

import DistrictDropdown from '@components/011-healthDashboard/ThailandDropdown/DistrictDropdown';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/011-healthDashboard/ThailandDropdown/DistrictDropdown', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <DistrictDropdown
        onToggleSubDistrictHandler={() => {}}
        onDistrictValueHandler={() => {}}
        district={{
          NameEN: 'Khet Phra Nakhon',
          NameTH: 'เขตพระนคร',
          id: 1001,
          isChecked: false,
        }}
      />
    );
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check component is valid', () => {
    const districtCheck = screen.getByText(/เขตพระนคร/i);
    expectVaidComponent(districtCheck);
  });
});

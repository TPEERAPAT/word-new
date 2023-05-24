// @ts-nocheck
import '@testing-library/jest-dom';

import RegionDropdown from '@components/011-healthDashboard/ThailandDropdown/RegionDropdown';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/011-healthDashboard/ThailandDropdown/RegionDropdown', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RegionDropdown
        region={{
          id: 1,
          NameTH: 'ภาคเหนือ',
          NameEN: 'North',
          isChecked: false,
        }}
        onRegionValueHandler={() => {}}
        onToggleProvinceHandler={() => {}}
      />
    );
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check component is valid', () => {
    const regionCheck = screen.getByText(/ภาคเหนือ/i);
    expectVaidComponent(regionCheck);
  });
});

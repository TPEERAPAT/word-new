/* eslint-disable testing-library/no-node-access */
// @ts-nocheck
import Sidebar from '@components/navbar/Sidebar';
import { hideSideBarAction, showSideBarAction } from '@redux/navbar';
import { renderWithProviders } from '@redux/testWithRedux';
import { act, screen } from '@testing-library/react';
import React from 'react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/navbar/Sidebar', () => {
  const testData = {
    activeNav: 'Health Atlas',
    activeSubNav: 'Geographic Dashboard',
  };

  it('Check Icon Render', async () => {
    renderWithProviders(
      <Sidebar
        activeNav={testData.activeNav}
        activeSubNav={test.activeSubNav}
      />
    );

    const element = await screen.findByTestId('sidebar-icon-test');
    expect(element).toBeInTheDocument();
  });

  it('Check Active Navigation', async () => {
    renderWithProviders(
      <Sidebar
        activeNav={testData.activeNav}
        activeSubNav={testData.activeSubNav}
      />
    );

    // active sub nav should have dark blue background
    const selectedSubNav = await screen.findByTestId(
      'sidebar-Geographic Dashboard'
    );
    expect(selectedSubNav).toHaveClass('bg-blueDarkOcare');

    // other sub nav should not have dark blue background
    const otherSubNav = await screen.findByTestId('sidebar-Health Dashboard');
    expect(otherSubNav).not.toHaveClass('bg-blueDarkOcare');
  });

  it('Check Not Collapse Navigation', async () => {
    const { store } = renderWithProviders(
      <Sidebar
        activeNav={testData.activeNav}
        activeSubNav={testData.activeSubNav}
      />
    );

    // Show sidebar
    await act(async () => {
      await store.dispatch(showSideBarAction());
    });

    const element = await screen.findByTestId('sidebar-icon-test');
    // eslint-disable-next-line testing-library/no-node-access
    expect(element.parentElement).toHaveClass('w-[240px]');
  });

  it('Check Collapse Navigation', async () => {
    const { store } = renderWithProviders(
      <Sidebar
        activeNav={testData.activeNav}
        activeSubNav={testData.activeSubNav}
      />
    );

    // Hide sidebar
    await act(async () => {
      await store.dispatch(hideSideBarAction());
    });

    const element = await screen.findByTestId('sidebar-icon-test');
    // eslint-disable-next-line testing-library/no-node-access
    expect(element.parentElement).toHaveClass('w-0');
  });
});

// @ts-nocheck
import Navbar from '@components/navbar/Navbar';
import { hideSideBarAction, showSideBarAction } from '@redux/navbar';
import { renderWithProviders } from '@redux/testWithRedux';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/navbar/Navbar', () => {
  const testActiveNavbar = 'Data Management';

  it('Check Child Render', async () => {
    renderWithProviders(
      <Navbar activeNav={testActiveNavbar}>
        <div data-testid="navbar-child-test"></div>
      </Navbar>
    );

    expect(await screen.findByTestId('navbar-child-test')).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('Check Hide Sidebar Function', async () => {
    const { store } = renderWithProviders(
      <Navbar activeNav={testActiveNavbar}>
        <div data-testid="navbar-child-test"></div>
      </Navbar>
    );

    // Show sidebar first & Check if it really shown
    const iconElement = await screen.findByTestId('sidebar-icon-test');
    // await store.dispatch(showSideBarAction());
    await act(async () => {
      await store.dispatch(showSideBarAction());
    });
    // eslint-disable-next-line testing-library/no-node-access
    expect(iconElement.parentElement).toHaveClass('w-[240px]');

    // Click on icon
    const contentElement = await screen.findByTestId('navbar-child-test');
    await userEvent.click(contentElement);

    // Check sidebar is really hidden
    // eslint-disable-next-line testing-library/no-node-access
    expect(iconElement.parentElement).toHaveClass('w-0');
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('Check Show Sidebar Function', async () => {
    const { store } = renderWithProviders(
      <Navbar activeNav={testActiveNavbar}>
        <div data-testid="navbar-child-test"></div>
      </Navbar>
    );

    // Hide sidebar first & Check if it really hidden
    const iconElement = await screen.findByTestId('sidebar-icon-test');
    await act(async () => {
      await store.dispatch(hideSideBarAction());
    });
    // await store.dispatch(hideSideBarAction());
    // eslint-disable-next-line testing-library/no-node-access
    expect(iconElement.parentElement).toHaveClass('w-0');

    // Click on icon
    const contentElement = await screen.findByTestId('topbar-icon-test');
    await userEvent.click(contentElement);

    // Check sidebar is really hidden
    // eslint-disable-next-line testing-library/no-node-access
    expect(iconElement.parentElement).toHaveClass('w-[240px]');
  });
});

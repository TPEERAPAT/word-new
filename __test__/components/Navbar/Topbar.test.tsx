// @ts-nocheck
import Topbar from '@components/navbar/Topbar';
import { hideSideBarAction } from '@redux/navbar';
import { renderWithProviders } from '@redux/testWithRedux';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/navbar/Topbar', () => {
  it('Check Text Render', async () => {
    renderWithProviders(<Topbar />);

    expect(await screen.findByText(/Hospital name/i)).toBeInTheDocument();
  });

  it('Check Icon Render', async () => {
    renderWithProviders(<Topbar />);

    const element = await screen.findByTestId('topbar-icon-test');
    expect(element).toBeInTheDocument();
  });

  it('Check Icon Clicking', async () => {
    // Mock function
    const showSideBar = jest.fn();

    const { store } = renderWithProviders(<Topbar showSideBar={showSideBar} />);

    // Hide sidebar first
    act(() => {
      store.dispatch(hideSideBarAction());
    });

    // Get Icon Element
    const element = await screen.findByTestId('topbar-icon-test');

    // Check topbar is showing
    // eslint-disable-next-line testing-library/no-node-access
    expect(element.parentElement).toHaveClass('h-16');

    // Click on icon
    await userEvent.click(element);
    // eslint-disable-next-line testing-library/no-node-access
    // expect(element.parentElement).toHaveClass('h-0');
    expect(showSideBar).toHaveBeenCalled();
  });
});

// @ts-nocheck
import '@testing-library/jest-dom';

import WhitelistImport from '@components/051-addPatient/Data-Management/WhitelistImport';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/051-addPatient/Data-Management/WhitelistImport', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <WhitelistImport
        onFileUploadHandler={() => {}}
        onLoadingHandler={() => {}}
      />
    );
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check component is valid', async () => {
    const upload = screen.getByText('Upload file');
    expectVaidComponent(upload);

    const importNow = screen.getByText(/import now/i);
    expectVaidComponent(importNow);

    const setScheduled = screen.getByText(/Set Scheduled/i);
    expectVaidComponent(setScheduled);
  });
});

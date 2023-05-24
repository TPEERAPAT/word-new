// @ts-nocheck
import '@testing-library/jest-dom';

import SingleImport from '@components/051-addPatient/Data-Management/SingleImport';
import { render, screen } from '@testing-library/react';

const expectVaidComponent = (element: HTMLElement) =>
  expect(element).toBeInTheDocument();

describe('Check @components/051-addPatient/Data-Management/SingleImport', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SingleImport />);
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check component is valid', async () => {
    const id = screen.getByText(/id/i);
    expectVaidComponent(id);

    const hn = screen.getByText(/hn/i);
    expectVaidComponent(hn);

    const visitOptional = screen.getByText('Visit (optional)');
    expectVaidComponent(visitOptional);
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check input value is invalid', async () => {
    const idInput = screen.getByPlaceholderText(/ex. 23000112/i);
    expectVaidComponent(idInput);

    const hnInput = screen.getByPlaceholderText(/ex. 21, 22/i);
    expect(hnInput).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/expect-expect
  it('Check submit console isvalid', () => {
    const reset = screen.getByText(/reset default/i);
    expectVaidComponent(reset);

    const submit = screen.getByText(/submit/i);
    expectVaidComponent(submit);
  });
});

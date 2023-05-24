// @ts-nocheck
import '@testing-library/jest-dom';

import PatientPortal from '@components/033-patientProfile/PatientPortal';
import { render, screen } from '@testing-library/react';
import React from 'react';

const mockPatientPortalProps = {
  inputData: {},
  setInputData: jest.fn(),
  handleKeyDownEnter: jest.fn(),
  handleClickSearch: jest.fn(),
  isLoading: false,
};

describe('Patient Profile Landing', () => {
  it('renders correctly', async () => {
    render(<PatientPortal {...mockPatientPortalProps} />);

    const heading = screen.getByRole('heading', {
      name: /Patient Portal/i,
    });
    const searchPlaceholder = screen.getByPlaceholderText(
      'เลขที่บัตรประชาชน / ชื่อ-สกุล'
    );
    const buttonText = screen.getByText('ค้นหารายชื่อ');

    expect(heading).toBeInTheDocument();
    expect(searchPlaceholder).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});

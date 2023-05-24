import Navbar from '@components/navbar/Navbar';
import PageHead from '@components/Ui/PageHead';
import type { FC } from 'react';
import React from 'react';

interface HealthSummaryErrorProps {
  msg: string;
}

const HealthSummaryError: FC<HealthSummaryErrorProps> = ({ msg }) => {
  const ErrorMessage = () => {
    if (msg === 'fetch data error') {
      return (
        <>
          <h2>{`Can not get data from server`}</h2>
          <p>Please check your internet connection</p>
          <p>or contact Ocare Health Hub</p>
        </>
      );
    }
    return (
      <>
        <h2>Internal Server Error</h2>
        <p>Please contact Ocare Health Hub</p>
      </>
    );
  };

  return (
    <>
      <Navbar activeNav="Patient Engagement" activeSubNav="Patient Profile">
        <div className="flex h-screen flex-col">
          <PageHead title="Health summary" />
          {/* ---- search result ---- */}
          <div className="flex h-full flex-col items-center justify-center">
            <ErrorMessage />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default HealthSummaryError;

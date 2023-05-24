import HealthSummary from '@components/033-patientProfile/HealthSummary/HealthSummary';
import HealthSummaryError from '@components/033-patientProfile/HealthSummary/HealthSummaryError';
import type { NextRequest } from 'next/server';
import type { FC } from 'react';
import React from 'react';

import type { MyCookie } from '#types/myCookie';
import type { HealthSummaryProps } from '#types/PatientProfile';

const HealthSummaryPage: FC<HealthSummaryProps> = ({ data }) => {
  if (data.error === 'fetch data error') {
    return <HealthSummaryError msg={`fetch data error`} />;
  }
  if (Object.keys(data).length > 0) {
    return <HealthSummary data={data} />;
  }
  return <HealthSummaryError msg={`Internal Server Error`} />;
};

export async function getServerSideProps({ req }: { req: NextRequest }) {
  const uuid = req.url.split('/')[2];
  const requestPath = `https://atlasapi.optimizecare.com/api/v1/cda/${uuid}`;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { access_token } = req.cookies as MyCookie;
  const myHeaders = new Headers();
  myHeaders.append('Authorization', access_token);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as const,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return {
      props: {
        data: {
          error: 'fetch data error',
        },
      },
    };
  }
}

export default HealthSummaryPage;

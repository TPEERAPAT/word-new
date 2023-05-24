import PatientDiscovery from '@components/033-patientProfile/PatientDiscovery';
import type { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';

interface PreviewPageProps {
  previewData: {
    data: any[];
    status: string;
  };
  countPatient: string;
}

const PreviewPage: NextPage<PreviewPageProps> = ({
  previewData,
  countPatient,
}) => {
  return (
    <PatientDiscovery
      ClinicalInfo={{
        Demographic: [],
        ClinicalCaptures: [],
        HealthConditions: [],
        VisitLocations: [],
      }}
      SearchResult={previewData.data}
      PatientCount={countPatient}
      message={previewData.status}
    />
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params, req } = context;
  const urlName = params?.en64json as string;
  const page = urlName.split('&')[0] || 'page=1';
  const encodeURL = urlName.split('&')[1] || '';
  const decodeURL = Buffer.from(encodeURL, 'base64').toString('utf-8');

  const cookies = req.headers.cookie?.substring(
    'access_token='.length
  ) as string;

  const requestPath = `https://atlasapi.optimizecare.com/api/v2/patients/search?${page}`;
  const myHeaders = new Headers();
  myHeaders.append('Authorization', cookies);

  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: decodeURL,
    redirect: 'follow' as const,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const fetchData = await response.json();
    const { headers } = response;
    const CountPatient = headers.get('X-Count-Patients');
    return {
      props: {
        previewData: fetchData,
        countPatient: CountPatient,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`error [en64json].ts: \n${error}`);
    return {
      props: {
        previewData: {
          data: [],
          status: 'error',
        },
        countPatient: '0',
      },
    };
  }
}

export default PreviewPage;

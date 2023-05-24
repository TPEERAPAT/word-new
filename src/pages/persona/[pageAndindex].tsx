import PatientDiscovery from '@components/033-patientProfile/PatientDiscovery';
import type { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';

interface PersonaListPageProps {
  previewData: {
    data: any[];
    status: string;
  };
  countPatient: string;
}

const PreviewPage: NextPage<PersonaListPageProps> = ({
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
  const queryString = params?.pageAndindex as string;
  const keyValuePairs: [string, string][] = queryString
    .split('&')
    .map((substring) => substring.split('=') as [string, string]);
  const personaId = keyValuePairs.find((pair) => pair[0] === 'personaId')![1];
  const page = keyValuePairs.find((pair) => pair[0] === 'page')![1];
  const cookies = req.headers.cookie?.substring(
    'access_token='.length
  ) as string;

  const requestPath = `https://atlasapi.optimizecare.com/api/v2/patients?page=${page}&persona-id=${personaId}`;

  const myHeaders = new Headers();
  myHeaders.append('Authorization', cookies);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as const,
  };

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
}

export default PreviewPage;

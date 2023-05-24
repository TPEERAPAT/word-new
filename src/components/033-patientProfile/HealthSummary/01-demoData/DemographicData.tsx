import React from 'react';

import DemographicCard from './DemoGraphicCard';

interface Props {
  data: any;
  visitData: any;
  healthStatus: string;
  thirdParty?: boolean;
}

const DemographicData = ({
  data,
  visitData,
  healthStatus,
  thirdParty,
}: Props) => {
  return (
    <DemographicCard
      name={`${data.Gender === 'Male' ? 'นางสาว' : 'นาย'} ${data.FirstName} ${
        data.LastName
      }`}
      healthStatus={healthStatus}
      visits={visitData}
      birthDate={data.Birthdate === '' ? '-' : data.Birthdate}
      age={data.Age === '' ? '-' : data.Age}
      gender={data.Gender === 'Male' ? 'หญิง' : 'ชาย'}
      nation={'???'}
      payer={data.Prayor === '' ? '-' : data.Prayor}
      thirdParty={thirdParty}
    />
  );
};

export default DemographicData;

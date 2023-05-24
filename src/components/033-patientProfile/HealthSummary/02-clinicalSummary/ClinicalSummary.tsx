import type { FC } from 'react';
import React from 'react';

import type { HealthSummaryProps } from '#types/PatientProfile';

import ClinicalInformation from './ClinicalInformation';
import HealthAnalysis from './HealthAnalysis';
import InvestigationResult from './InvestigationResult/InvestigationResults';

const ClinicalSummary: FC<HealthSummaryProps> = ({ data, thirdParty }) => {
  return (
    <div className="flex flex-col gap-[18px] px-[18px]">
      <ClinicalInformation data={data} />
      {!thirdParty && <HealthAnalysis PatientData={data} />}
      <InvestigationResult data={data} />
    </div>
  );
};

export default ClinicalSummary;

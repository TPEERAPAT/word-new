import Tabs from '@components/Ui/Tabs';
import type { FC } from 'react';
import React, { useState } from 'react';

import type { HealthSummaryProps } from '#types/PatientProfile';

import Navbar from '../../navbar/Navbar';
import SumHeader from './00-header/SumHeader';
import DemographicData from './01-demoData/DemographicData';
import ClinicalSummary from './02-clinicalSummary/ClinicalSummary';
import MedicationHistory from './02-clinicalSummary/MedicineHistory';

const HealthSummary: FC<HealthSummaryProps> = ({ data, thirdParty }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  function dateChangeHandler(start: any, end: any) {
    setStartDate(start);
    setEndDate(end);
  }

  return (
    <Navbar
      activeNav="Patient Engagement"
      activeSubNav="Patient Profile"
      disable={thirdParty}
    >
      <div className="bg-backgroundOcare">
        <SumHeader
          startDate={startDate}
          endDate={endDate}
          dateChangeHandler={dateChangeHandler}
        />
        <div className="h-[1px] w-full bg-greySemiLightOcare" />
        <DemographicData
          data={data.PatientInfo}
          visitData={data.CountVisits}
          healthStatus={data.ClinicalInfo.HealthPriorityIDs[0]}
          thirdParty={thirdParty}
        />
        <Tabs
          tabList={[
            {
              name: 'Clinical Summary',
              tabContent: (
                <ClinicalSummary data={data} thirdParty={thirdParty} />
              ),
            },
            {
              name: 'Medication History',
              tabContent: (
                <MedicationHistory data={data.MedicationInfo.LineItem} />
              ),
            },
            {
              name: 'Attached Document',
              tabContent: <div>Attached Document 3</div>,
            },
            {
              name: 'Vaccine',
              tabContent: <div>Vaccine 4</div>,
            },
            {
              name: 'Occupational Health',
              tabContent: <div>Occupational Health 5</div>,
            },
            {
              name: 'Hospital visit',
              tabContent: <div>Hospital visit 6</div>,
            },
            {
              name: 'Telemedicine',
              tabContent: <div>Telemedicine 7</div>,
            },
            {
              name: 'Customer Profile',
              tabContent: <div>Customer Profile 8</div>,
            },
          ]}
        />
      </div>
    </Navbar>
  );
};

export default HealthSummary;

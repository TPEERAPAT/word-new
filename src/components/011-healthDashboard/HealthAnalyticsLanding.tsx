import Card from '@components/Card/Card';
import type { FC } from 'react';
import React, { useState } from 'react';

import type { DataObject } from '#types/HealthAnalytics';

import Navbar from '../navbar/Navbar';
import GovernmentDropdown from './GovernmentDropdown/GovernmentDropdown';
import AgeCard from './InformationCards/AgeCard';
import GenderCard from './InformationCards/GenderCard';
import PopulationCard from './InformationCards/PopulationCard';
import ThailandDropdown from './ThailandDropdown/ThailandDropdown';

interface HealthAnalyticsLandingProps {
  thirdParty?: boolean;
}

const HealthAnalyticsLanding: FC<HealthAnalyticsLandingProps> = ({
  thirdParty = false,
}) => {
  const mockData: DataObject = {
    AgeRange: [
      {
        Label: 'More41Less50',
        PatientCount: 3,
      },
      {
        Label: 'More61',
        PatientCount: 9,
      },
      {
        Label: 'More31Less40',
        PatientCount: 8,
      },
      {
        Label: 'Less30',
        PatientCount: 46,
      },
    ],
    Condition: [
      {
        ConditionName: 'obesity',
        Stage: [
          {
            Label: 'ขั้นที่ 3',
            PatientCount: 66,
          },
        ],
        TotalPatients: 66,
      },
      {
        ConditionName: 'dyslipidemia',
        Details: [
          {
            Label: 'cholestorol',
            PatientCount: 44,
          },
          {
            Label: 'ldl',
            PatientCount: 66,
          },
          {
            Label: 'triglyceride',
            PatientCount: 22,
          },
          {
            Label: 'hdl',
            PatientCount: 22,
          },
        ],
        TotalPatients: 66,
      },
      {
        ConditionName: 'hypertension',
        Stage: [
          {
            Label: 'ขั้นที่ 2',
            PatientCount: 57,
          },
        ],
        TotalPatients: 57,
      },
      {
        ConditionName: 'diabetes',
        Stage: [
          {
            Label: 'ขั้นที่ 2',
            PatientCount: 2,
          },
        ],
        TotalPatients: 2,
      },
      {
        ConditionName: 'kidney',
        Stage: [
          {
            Label: 'ขั้นที่ 3',
            PatientCount: 14,
          },
        ],
        TotalPatients: 14,
      },
    ],
    Gender: [
      {
        Label: 'Female',
        PatientCount: 16,
      },
      {
        Label: 'Male',
        PatientCount: 50,
      },
    ],
    HealthStatus: [
      {
        Label: 'abnormal',
        PatientCount: 66,
      },
    ],
    Payor: [
      {
        Label: 'Insurance',
        PatientCount: 66,
      },
      {
        Label: 'Self Pay',
        PatientCount: 66,
      },
    ],
  };

  const [fixedScreen, setFixScreen] = useState<boolean>(false);

  const fixedScreenHandler = (status: boolean) => {
    setFixScreen(status);
  };

  return (
    <div className={`${fixedScreen && 'fixed w-[99%]'}`}>
      <>
        <Navbar
          activeNav="Health Atlas"
          activeSubNav="Health Dashboard"
          disable={thirdParty}
        >
          <div className="flex w-full flex-col p-6">
            <h1 className="mb-[22px] font-bold">Health Analytics</h1>

            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              {/* Province dropdown */}
              <ThailandDropdown onFixedScreen={fixedScreenHandler} />

              {/* Main center dropdown */}
              {/* <ButtonMain /> */}
              <GovernmentDropdown onFixedScreen={fixedScreenHandler} />

              {/* Main center dropdown */}
              {/* <ButtonSub /> */}

              {/* Submit button */}
              {/* <ButtonSubmit /> */}
            </form>

            <Card shadow className="my-5 p-6 pt-4">
              <PopulationCard data={mockData.AgeRange} />
              <div className="grid h-1/3 grid-cols-3 gap-4">
                <GenderCard data={mockData.Gender} />

                <AgeCard data={mockData.AgeRange} />

                {/* <InsuranceCard data={mockData.insurance} /> */}
              </div>
              {/* edit this first */}
            </Card>

            <Card shadow className="p-6">
              <div className=" grid h-2/3 grid-cols-3 gap-4">
                <div className="col-span-3 grid grid-cols-3 grid-rows-1 gap-4">
                  <div className="col-span-3 row-span-1">
                    {/* <HealthStatusCard
                      contentAxisX={false}
                      data={mockData.healthStatus}
                    /> */}
                  </div>
                </div>
                {/* fat and boold */}
                <div className="col-span-2 grid grid-cols-2 grid-rows-1 gap-4">
                  {/* <div className="col-span-1 row-span-1"></div> */}
                  <div className="col-span-1 row-span-1">
                    {/* will switch to obe */}
                    {/* <ObesityCard data={mockData.obesity} /> */}
                  </div>
                  <div className="col-span-1 row-span-1">
                    {/* <HyperTensionCard data={mockData.hypertension} /> */}
                  </div>
                  <div className="col-span-1 row-span-1">
                    <div className="row-span-1">
                      {/* <DyslipdemiaCard data={mockData.dyslipidemia} /> */}
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1">
                    <div className="row-span-1 h-[50%] pb-2">
                      {/* <DiabetesCard data={mockData.diabetes} /> */}
                    </div>
                    <div className="row-span-1 h-[50%] pt-2">
                      {/* will switch to kidney */}
                      {/* <KidneyCard data={mockData.kidney} /> */}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-1 grid-rows-1 gap-4">
                  <div className="col-span-1">
                    {/* <SectionCard data={mockData.section} /> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Navbar>
      </>
    </div>
  );
};

export default HealthAnalyticsLanding;

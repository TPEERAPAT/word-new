import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const CustomerDetail = ({ data }: { data: any }) => {
  const mockData = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];

  function renderBox(name: string, dataList?: any) {
    return (
      <div className="w-full">
        <Card className="rounded-md p-3 sm:rounded-lg sm:p-6" shadow={true}>
          <DisplayBox header={name}>
            <div className="mt-3 flex flex-col gap-3">
              {dataList.map((eachData: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="flex rounded-lg bg-greySemiLightOcare p-3 text-sm font-medium"
                  >
                    <Chip color="white" text="NDxYs-??????" bold />
                    <div className="ml-auto mr-0 flex items-center gap-4">
                      <p>x? ครั้ง</p>
                      <Chip color="green" text="+ ?%" bold />
                    </div>
                  </div>
                );
              })}
            </div>
          </DisplayBox>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
      {renderBox('HealthCondition', mockData)}
      {renderBox('Hospital', mockData)}
      {renderBox('Clinic/Location', mockData)}
    </div>
  );
};

export default CustomerDetail;

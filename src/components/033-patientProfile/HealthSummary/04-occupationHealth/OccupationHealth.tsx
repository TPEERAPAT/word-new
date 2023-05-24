import Card from '@components/Card/Card';
import React from 'react';

import JobHistory from './JobHistory';
import JobRelateillness from './JobRelateillness';

// eslint-disable-next-line unused-imports/no-unused-vars
const OccupationHealth = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <Card className="rounded-md px-3 pt-3 sm:rounded-lg sm:p-6" shadow={true}>
        <h1 className="mb-3 border-x-0 border-t-0 border-solid border-greyLightOcare pb-3 text-lg font-medium sm:mb-6 sm:pb-6 sm:text-2xl">
          ประวัติการทำงาน
        </h1>
        <JobHistory data="" />
      </Card>
      <Card className="rounded-md px-3 pt-3 sm:rounded-lg sm:p-6" shadow={true}>
        <h1 className="mb-3 border-x-0 border-t-0 border-solid border-greyLightOcare pb-3 text-lg font-medium sm:mb-6 sm:pb-6 sm:text-2xl">
          บันทึกเกี่ยวกับการบาดเจ็บหรือเจ็บป่วยเนื่องจากการทำงานและสาเหตุ
        </h1>
        <JobRelateillness data="" />
      </Card>
    </div>
  );
};

export default OccupationHealth;

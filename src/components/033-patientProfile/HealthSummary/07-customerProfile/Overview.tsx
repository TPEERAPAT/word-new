import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import React from 'react';
import { MdStar } from 'react-icons/md';

import ClientGroup from './ClientGroup';

// eslint-disable-next-line unused-imports/no-unused-vars
const Overview = ({ data }: { data: any }) => {
  const visit = (
    <DisplayBox header="จำนวนที่มา รพ. (ครั้ง)">
      <div className="mt-1.5 flex gap-6 font-normal">
        <p className="text-2xl">24</p>
        <Chip color="red" text="- ?%" bold />
      </div>
    </DisplayBox>
  );

  const expense = (
    <DisplayBox header="ค่าใช้จ่ายรวม (บาท)">
      <div className="mt-1.5 flex gap-6 font-normal">
        <p className="text-2xl font-semibold">$$$,$$$</p>
        <Chip color="green" text="+ ?%" bold />
      </div>
    </DisplayBox>
  );

  const satisfaction = (
    <DisplayBox header="ความพึงพอใจเฉลี่ย">
      <div className="mt-1.5 flex gap-6 font-normal">
        <MdStar size={31} color="rgba(255, 204, 0, 1)" />
        <p className="text-2xl">x.x</p>
        <Chip color="red" text="- ?%" bold />
      </div>
    </DisplayBox>
  );

  const sideLine = (
    <span className="hidden h-[75px] w-[1px] bg-greyLightOcare lg:block" />
  );

  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-0">
      {visit}
      {sideLine}
      {expense}
      {sideLine}
      {satisfaction}
      {sideLine}
      <ClientGroup />
    </div>
  );
};

export default Overview;

import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import React from 'react';
import { IoDocumentText, IoPersonCircle } from 'react-icons/io5';
import { RiTimerFill } from 'react-icons/ri';

// eslint-disable-next-line unused-imports/no-unused-vars
const Telemed = ({ data }: { data: any }) => {
  // hardcode
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

  const detailName = (
    <div className="mb-3 flex items-center rounded-lg px-3 text-sm text-greyOcare sm:gap-6 sm:px-6 sm:text-base">
      <p className="hidden min-w-[150px] lg:block">รหัสการใช้งาน</p>
      <p className="min-w-[110px] md:min-w-[180px]">วัน - เวลา</p>
      <p className="hidden  min-w-[70px] sm:block">ระยะเวลา</p>
      <p className="min-w-[165px]">แพทย์</p>
      <p className="hidden  min-w-[80px] lg:block" />
    </div>
  );

  const allTelemed = mockData.map((telemed: any, i: number) => {
    return (
      <div
        key={i}
        className="flex items-center rounded-lg bg-greySemiLightOcare px-3 py-1.5 text-sm font-medium text-greyOcare sm:gap-6 sm:p-6 lg:text-base"
      >
        <div className="hidden min-w-[150px] lg:block">??telemedId?/?</div>
        <div className="flex min-w-[110px] gap-3 md:min-w-[180px]">
          <Chip color="white" text="15 เม.ษ. 2565" bold />
          <Chip color="white" text="tt:tt น." bold />
        </div>
        <div className="hidden min-w-[70px] items-center gap-1.5 sm:flex">
          <RiTimerFill size={14} className="fill-redOcare" />
          <p>?? นาที</p>
        </div>
        <div className="flex min-w-[140px] items-center gap-1.5">
          <IoPersonCircle size={24} className="fill-blueOcare" />
          <p>นพ. ?????? ???????</p>
        </div>
        <Button
          size="full"
          bold
          shadow
          startIcon={<IoDocumentText size={15} />}
          text="Doctor Note"
          className="ml-auto max-w-[160px]"
        />
      </div>
    );
  });

  return (
    <div className="p-3 sm:p-6">
      <Card className="rounded-md p-3 sm:rounded-lg sm:p-6" shadow={true}>
        <h1 className="mb-3 border-x-0 border-t-0 border-solid border-greyLightOcare pb-3 text-lg font-medium sm:mb-6 sm:pb-6 sm:text-2xl">
          รายการตรวจผ่านโทรศัพท์
        </h1>
        {detailName}
        <div className="flex flex-col gap-4">{allTelemed}</div>
      </Card>
    </div>
  );
};

export default Telemed;

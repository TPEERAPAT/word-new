import downloadPic from '@assets/HealthSummary/download.png';
import filePDF from '@assets/HealthSummary/fileType_PDF.png';
import Card from '@components/Card/Card';
import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const Vaccine = ({ data }: { data: any }) => {
  const mockData = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  const detailName = (
    <div className="mb-3 flex items-center rounded-lg px-3 text-sm text-greyOcare sm:gap-3 sm:px-6 sm:text-base lg:gap-6">
      <p className="min-w-[160px] xl:min-w-[240px]">รายการ</p>
      <p className="min-w-[130px] lg:min-w-[150px]">วันที่ฉีด</p>
      <p className="hidden min-w-[140px] sm:block">ยี่ห้อ</p>
      <p className="hidden min-w-[165px] md:block">Lot.No</p>
      <p className="hidden  min-w-[80px] lg:block">คลินิก</p>
    </div>
  );

  const allVaccine = mockData.map((eachDoc: any, i: number) => {
    return (
      <Card
        key={i}
        className="mt-1.5 flex items-center rounded p-3 font-medium text-greyOcare sm:mt-4 sm:gap-3 sm:rounded-2xl sm:p-6 lg:gap-6"
        shadow={true}
      >
        <button className="flex min-w-[160px] cursor-pointer items-center border-none bg-transparent xl:min-w-[240px]">
          <Image src={filePDF} alt="file" width={30} height={30} />
          <p className="ml-4 font-bold underline">??Vaccine{i}??</p>
        </button>
        <p className="min-w-[130px] lg:min-w-[150px]">?d xm?m y?yy</p>
        <p className="hidden min-w-[140px] sm:block">?brand??</p>
        <p className="hidden min-w-[165px] md:block">??Lot?No?</p>
        <p className="hidden min-w-[100px] lg:block">C?in?</p>
        <button className="ml-auto mr-0 flex cursor-pointer items-center border-none bg-transparent">
          <Image src={downloadPic} alt="download" width={30} height={30} />
        </button>
      </Card>
    );
  });

  return (
    <div className="mx-3 mt-4 sm:mx-6">
      {detailName}
      {allVaccine}
    </div>
  );
};

export default Vaccine;

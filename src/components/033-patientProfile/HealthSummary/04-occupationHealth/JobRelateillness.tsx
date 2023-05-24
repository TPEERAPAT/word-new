import WarnPic from '@assets/HealthSummary/warning.png';
import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const JobRelateillness = ({ data }: { data: any }) => {
  const mockData = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  const detailName = (
    <div className="mb-3 flex items-center justify-between gap-3 rounded-lg px-3 text-sm text-greyOcare sm:px-6 sm:text-base lg:gap-6">
      <p className="min-w-[140px] lg:min-w-[240px]">วันที่</p>
      <p className="min-w-[130px] lg:min-w-[150px]">ส่วนของร่างกาย</p>
      <p className="hidden min-w-[140px] lg:block">สาเหตุ</p>
      <p className="hidden min-w-[125px] sm:block">ระดับความรุนแรง</p>
    </div>
  );

  const allWRI = mockData.map((illness: any, i: number) => {
    return (
      <div
        key={i}
        className="mb-3 mt-1.5 flex items-center justify-between gap-3 rounded bg-greySemiLightOcare p-3 font-medium text-greyOcare sm:mb-6 sm:mt-4 sm:rounded-2xl sm:p-6 lg:gap-6"
      >
        <p className="flex min-w-[140px] items-center gap-3 lg:min-w-[240px]">
          <Image src={WarnPic} alt="danger" height={32} width={32} />
          {/* ?d xm?m yy */}
          15 เม.ย. 60
        </p>
        <p className="min-w-[130px] lg:min-w-[150]">?bo?y?</p>
        <p className="hidden min-w-[140px] lg:block">?ส?ห?</p>
        <p className="hidden min-w-[125px] sm:block">VN???</p>
      </div>
    );
  });

  return (
    <div>
      {detailName}
      {allWRI}
    </div>
  );
};

export default JobRelateillness;

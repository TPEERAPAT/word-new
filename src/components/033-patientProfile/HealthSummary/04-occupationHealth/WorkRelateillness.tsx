import WarnPic from '@assets/HealthSummary/warning.png';
import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const WorkRelateillness = ({ data }: { data: any }) => {
  const mockData = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  const detailName = (
    <div className="flex items-center gap-3 rounded-lg px-6">
      <p className="w-80 text-greyOcare">วันที่</p>
      <p className="w-44 text-greyOcare">ส่วนของร่างกาย</p>
      <p className="w-52 text-greyOcare">สาเหตุ</p>
      <p className="w-44 text-greyOcare">ระดับความรุนแรง</p>
    </div>
  );

  const allWRI = mockData.map((illness: any) => {
    return (
      <div
        key={illness.id}
        className="mt-6 flex w-full items-center rounded-lg bg-greySemiLightOcare px-6 py-4"
      >
        <div className="mr-3 flex w-80 gap-4">
          <Image src={WarnPic} alt="danger" height={32} width={32} />
          <p className="text-lg font-bold">xว xด xป</p>
        </div>
        <p className="mr-3 w-44 font-normal">????</p>
        <p className="mr-3 w-52 font-normal">????</p>
        <p className="mr-3 w-44 font-normal text-redOcare">● ????</p>
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

export default WorkRelateillness;

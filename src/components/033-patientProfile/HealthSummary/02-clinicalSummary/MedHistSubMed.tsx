import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const MedHistSubMed = ({ subMed }: { subMed: any; color: string }) => {
  const columnWidth = {
    date: 'min-w-[120px] max-w-[120px]',
    detail: 'min-w-[164px] max-w-[164px]',
    location: 'min-w-[164px] max-w-[164px]',
    hospitalGroup: 'min-w-[164px] max-w-[164px]',
  };

  return (
    <div className="max-w-[90vw] overflow-x-auto px-6">
      <div className="mb-[18px] ml-3 flex min-h-[21px] gap-[24px] text-sm font-normal text-greyDarkOcare">
        <p className={`${columnWidth.date}`}>{`วันที่`}</p>
        <p className={`${columnWidth.detail}`}>{`รายละเอียด`}</p>
        <p className={`${columnWidth.location}`}>{`สถานที่`}</p>
        <p className={`${columnWidth.hospitalGroup}`}>{`โรงพยาบาล group`}</p>
      </div>
      <div className="flex w-fit flex-col gap-[12px] rounded-xl bg-greySemiLightOcare p-[12px]">
        {subMed.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex min-h-[21px] gap-[24px] text-sm font-normal`}
          >
            <p className={`${columnWidth.date}`}>{item.DateTime}</p>
            <p className={`${columnWidth.detail}`}>{item.Value}</p>
            <p className={`${columnWidth.location}`}>
              <HiOutlineLocationMarker className="mr-[6px]" />
              {item.Location}
            </p>
            <p className={`${columnWidth.hospitalGroup}`}>
              {item.HospitalGroup}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedHistSubMed;

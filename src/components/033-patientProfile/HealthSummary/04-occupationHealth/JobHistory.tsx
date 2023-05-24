import DisplayBox from '@components/Ui/DisplayBox';
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const JobHistory = ({ data }: { data: any }) => {
  const mockData = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  const boxStyle = 'mb-3 mr-3 inline-block w-[200px] align-top sm:mb-6 sm:mr-6';

  const allJob = mockData.map((eachJob: any, i: number) => {
    return (
      <div key={i} className="flex">
        {/* ---- number ---- */}
        <div className="mr-3 flex flex-col items-center sm:mr-6">
          <p
            className="mb-4 mt-6 flex items-center justify-center rounded-full bg-blueOcare font-bold text-white"
            style={{
              minWidth: '32px',
              minHeight: '32px',
            }}
          >
            {i + 1}
          </p>
          <div
            className={`
            h-full w-[1px] ${
              i < mockData.length - 1 ? 'bg-greyDarkOcare' : 'bg-none'
            }
          `}
          />
        </div>
        {/* ---- data ---- */}
        <div className="w-full rounded-lg bg-greySemiLightOcare px-3 pt-3 sm:px-6 sm:pt-6">
          {/* ---- head ---- */}
          <div className="mb-6 inline-block gap-0 sm:flex sm:gap-6">
            <h2 className="border-y-0 border-l-0 border-greyDarkOcare pr-6 text-lg font-medium sm:border-solid sm:text-2xl">
              บริษัท??????????
            </h2>
            <p className="flex items-center justify-center rounded-lg bg-blueLightOcare px-4 text-lg font-medium text-blueOcare">
              xว xด xป - yว yด yป
            </p>
          </div>
          {/* ---- detail ---- */}
          <div>
            <DisplayBox divClassName={boxStyle} header="รหัสพนักงาน">
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox divClassName={boxStyle} header="แผนก">
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox divClassName={boxStyle} header="สังกัด">
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox divClassName={boxStyle} header="ลักษณะงานที่ทำ">
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox
              divClassName={boxStyle}
              header="สิ่งคุกคามทางสุขภาพในที่ทำงาน"
            >
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox divClassName={boxStyle} header="การป้องกัน">
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox divClassName={boxStyle} header="ปัจจัยเสี่ยงต่อสุขภาพ">
              <p className="font-medium">??????</p>
            </DisplayBox>
          </div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-4 overflow-y-visible">{allJob}</div>;
};

export default JobHistory;

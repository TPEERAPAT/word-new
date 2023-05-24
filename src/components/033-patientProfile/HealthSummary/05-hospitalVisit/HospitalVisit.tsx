import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import SearchInput from '@components/Input/SearchInput';
import DisplayBox from '@components/Ui/DisplayBox';
import type { KeyboardEvent } from 'react';
import React, { useState } from 'react';
import { IoDocumentText } from 'react-icons/io5';
import { RiDownloadFill } from 'react-icons/ri';

const mockData = [
  {
    id: '1',
  },
  {
    id: '2',
  },
];

// eslint-disable-next-line unused-imports/no-unused-vars
const HospitalVisit = ({ data }: { data: any }) => {
  const [searchHospital, setSearchHospital] = useState<string>('');

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSearchHospital('developing...');
    }
  }

  const boxStyle =
    'mb-3 mr-3 inline-block w-[105px] align-top sm:mb-6 sm:mr-6 sm:w-[120px]';

  const allVisit = mockData.map((visit: any, i: number) => {
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
          <div className="mb-6 inline-block sm:gap-6 lg:flex">
            <h2 className="border-y-0 border-l-0 border-greyDarkOcare pr-6 text-lg font-medium sm:text-2xl lg:border-solid">
              xว xxด xxxป
            </h2>
            <Chip color="blue" text="xx:xx น. - yy:yy น." bold />
            <div className="ml-auto mr-0 mt-3 flex items-center gap-3 sm:gap-6 lg:mt-0">
              <Button
                type="text-red"
                size="full"
                bold
                startIcon={<RiDownloadFill />}
                text="ดาวน์โหลด"
              />
              <Button
                size="full"
                bold
                shadow
                startIcon={<IoDocumentText />}
                text="ดูรายงาน"
                className="min-w-[130px]"
              />
            </div>
          </div>

          {/* detail */}
          <div>
            <DisplayBox header="HN" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="VN" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="แพทย์" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="คลินิก" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="โรงพยาบาล" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="รายการตรวจ" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="CC (เหตุการมา รพ.)" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-3 sm:p-6">
      <Card className="rounded-md px-3 pt-3 sm:rounded-lg sm:p-6" shadow={true}>
        <h1 className="mb-3 flex border-x-0 border-t-0 border-solid border-greyLightOcare pb-3 text-lg font-medium sm:mb-6 sm:pb-6 sm:text-2xl">
          ประวัติการตรวจ
          <div className="ml-auto">
            <SearchInput
              placeholder="ค้นหา"
              type="outlined"
              value={searchHospital}
              onChange={(e) => setSearchHospital(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
        </h1>
        <div className="flex flex-col gap-4 overflow-y-visible">{allVisit}</div>
      </Card>
    </div>
  );
};

export default HospitalVisit;

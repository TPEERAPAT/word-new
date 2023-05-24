import Chip from '@components/Chip/Chip';
import SearchInput from '@components/Input/SearchInput';
import DisplayBox from '@components/Ui/DisplayBox';
import type { KeyboardEvent } from 'react';
import React, { useState } from 'react';
import { MdStar } from 'react-icons/md';

const mockData = [
  {
    id: '1',
  },
  {
    id: '2',
  },
];

// eslint-disable-next-line unused-imports/no-unused-vars
const ListHist = ({ data }: { data: any }) => {
  const [searchList, setSearchList] = useState<string>('');

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSearchList('developing...');
    }
  }

  function starRender(star: number) {
    const activeStar = <MdStar size={24} color="rgba(255, 204, 0, 1)" />;
    const inactiveStar = <MdStar size={24} color="rgba(229, 229, 234, 1)" />;
    return (
      <div className="flex items-center gap-3">
        {star >= 1 ? activeStar : inactiveStar}
        {star >= 2 ? activeStar : inactiveStar}
        {star >= 3 ? activeStar : inactiveStar}
        {star >= 4 ? activeStar : inactiveStar}
        {star >= 5 ? activeStar : inactiveStar}
      </div>
    );
  }

  const boxStyle =
    'mb-3 mr-3 inline-block w-[105px] align-top sm:mb-6 sm:mr-6 sm:w-[120px]';

  const allHist = mockData.map((history: any, i: number) => {
    return (
      <div key={i} className="flex overflow-y-visible">
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
            className={`h-full w-[1px]${
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
              12,?6x.0? บาท
            </h2>
            <Chip color="blue" text="1D m.ค. 25YY" bold />
            <div className="ml-auto mr-0 mt-3 flex items-center gap-3 sm:gap-6 lg:mt-0">
              {starRender(4)}
            </div>
          </div>
          {/* ---- detail ---- */}
          <div>
            <DisplayBox header="HN" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="VN" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="สิทธิการรักษา" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="คลินิก" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="Location" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>

            <DisplayBox header="ความคิดเห็น" divClassName={boxStyle}>
              <p className="font-medium">??????</p>
            </DisplayBox>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="mb-3 flex border-x-0 border-t-0 border-solid border-greyLightOcare pb-3 text-lg font-medium sm:mb-6 sm:pb-6 sm:text-2xl">
        ประวัติรายการ
        <div className="ml-auto">
          <SearchInput
            placeholder="ค้นหา"
            value={searchList}
            onChange={(e) => setSearchList(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
      </h1>
      <div className="flex flex-col gap-6">{allHist}</div>
    </div>
  );
};

export default ListHist;

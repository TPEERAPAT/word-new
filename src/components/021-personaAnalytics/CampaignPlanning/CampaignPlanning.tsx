import 'react-datepicker/dist/react-datepicker.css';

import Card from '@components/Card/Card';
import type { FC } from 'react';
import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';

import CampaignDateRangeInput from './CampaignDateRangeInput';
import RangeBar from './RangeBar';

const CampaignPlanning: FC = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const [endDate, setEndDate] = useState(
    new Date(new Date().setMonth(new Date().getMonth() + 3))
  );

  // eslint-disable-next-line unused-imports/no-unused-vars
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Card className="min-h-[221px] max-w-[663px] p-4" shadow>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <div>
            <div className="flex items-center gap-3">
              <AiOutlineInfoCircle className="text-blueOcare" size={18} />
              <h3 className="text-xl font-semibold">{`วางแผนแคมเปญ ระหว่างเวลา`}</h3>
            </div>
            <CampaignDateRangeInput
              startDate={startDate}
              endDate={endDate}
              onChange={(start: any, end: any) => {
                setStartDate(start);
                setEndDate(end);
              }}
            />
            <p className="ml-[30px] text-[10px] font-normal text-redOcare">{`*Default date is tomorrow til next 3 month`}</p>
          </div>
          <div className="ml-auto flex flex-col items-center justify-center rounded-lg bg-greySemiLightOcare px-6 py-3">
            <p className="font-semibold">15 รายการ</p>
            <p className="text-sm text-greyDarkOcare">Total Persona</p>
          </div>
        </div>
        <div className="mt-7 flex justify-between px-4">
          <RangeBar
            left={-20}
            color="greenOcare"
            w={15}
            label="Estimate size"
            percent={100}
            amount={'12,900'}
            customAmount={
              <div className="mt-2 flex items-center gap-1">
                <RiUser3Line className="mb-[2px]" />
                <p className="font-semibold">12,900</p>
              </div>
            }
          />
          <RangeBar
            left={160}
            color="blueOcare"
            w={65}
            label="Average cost / Person"
            percent={100}
            amount={'฿ 12,000'}
          />
          <RangeBar
            left={-20}
            color="seaBlueOcare"
            w={15}
            label="Total Valuation"
            percent={100}
            amount={'฿ 17,230,000'}
          />
        </div>
      </div>
    </Card>
  );
};

export default CampaignPlanning;

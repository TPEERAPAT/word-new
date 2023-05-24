import React, { useState } from 'react';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoListOutline } from 'react-icons/io5';

import HealthRecord from './HealthRecordTab/HealthRecord';
import HealthTrend from './HealthTrendTab/HealthTrend';

type Tab = 'Health Trend' | 'Health Record';

const InvestigationResult = ({ data }: { data: any }) => {
  const [showContent, setShowContent] = useState<boolean>(true);

  const [currentTab, setCurrentTab] = useState<Tab>('Health Trend');

  const tabList = [
    {
      startIcon: <AiOutlineLineChart className="ml-[18px]" size={17} />,
      name: 'Health Trend' as const,
      tabContent: <HealthTrend data={data} />,
    },
    {
      startIcon: <IoListOutline className="ml-[18px]" size={18} />,
      name: 'Health Record' as const,
      tabContent: <HealthRecord data={data} />,
    },
  ];

  return (
    <div className="mb-[18px] rounded-md bg-white p-[18px]">
      <div
        className={`
          ${
            showContent
              ? 'mb-[18px] border-0 border-b-[1px] border-solid border-greyLightOcare pb-[18px]'
              : ''
          }
        `}
      >
        <h2 className="mb-[6px] text-lg font-medium">Investigation Results</h2>
        <div
          className="flex w-fit cursor-pointer items-center gap-[12px]"
          onClick={() => setShowContent(!showContent)}
        >
          <p className="text-sm text-greyOcare">
            {showContent ? 'แสดงน้อยลง' : 'แสดงมากขึ้น'}
          </p>
          {showContent ? (
            <FiChevronUp size={16} className="ml-auto text-greyOcare" />
          ) : (
            <FiChevronDown size={16} className="ml-auto text-greyOcare" />
          )}
        </div>
      </div>
      {showContent && (
        <>
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto">
            {tabList.map((tab, index) => (
              <div
                key={index}
                className={`
              flex min-w-fit cursor-pointer items-center gap-3
              border-[0px] border-b-[1px] border-solid
              py-[6px] text-base transition delay-100 duration-300 ease-in-out
              ${
                currentTab === tab.name
                  ? 'border-blueOcare font-semibold text-blueOcare'
                  : 'border-greyLightOcare font-normal text-greyDarkOcare'
              }
            `}
                onClick={() => setCurrentTab(tab.name)}
              >
                {tab.startIcon}
                <p className="mr-[18px] text-sm text-greyOcare">{tab.name}</p>
              </div>
            ))}
          </div>
          {/* Tab Content */}
          {tabList.find((tab) => tab.name === currentTab)?.tabContent}
        </>
      )}
    </div>
  );
};

export default InvestigationResult;

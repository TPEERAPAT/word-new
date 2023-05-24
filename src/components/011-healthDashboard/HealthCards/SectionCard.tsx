import Card from '@components/Card/Card';
import type { FC } from 'react';
import { useState } from 'react';

import type { sectionProps } from '#types/HealthAnalytics';

import InformationBox from './InformationBox';

interface SectionCardProps {
  data: sectionProps;
}

const SectionCard: FC<SectionCardProps> = ({ data }) => {
  const notactive = 'border-greyline text-greyOcare font-medium';
  const active = 'border-blueOcare text-blueOcare font-bold';

  const [checkActive, setCheckActive] = useState(true);

  const toggleActive = () => {
    setCheckActive(!checkActive);
  };

  return (
    <Card color="greyRoundedOcare" className="w-full place-self-start p-4">
      <div>
        <h1 className="text-sm font-medium ">ปัญหาสุขภาพแยกตามหน่วยงาน</h1>
        <p className=" mt-1 text-xs text-greyDarkOcare">
          (Section-based Health Status)
        </p>
      </div>
      <div className="mb-2 mt-6 flex w-full ">
        {checkActive && (
          <div className="w-full">
            <button
              className={`w-2/4 cursor-pointer border-0 border-b-[1px] bg-transparent pb-2 font-sans text-xs ${notactive}`}
              onClick={toggleActive}
            >
              แผนก
            </button>
            <button
              className={`w-2/4 cursor-pointer border-0 border-b-[1px] bg-transparent pb-2 font-sans text-xs ${active}`}
            >
              สังกัด
            </button>
          </div>
        )}
        {!checkActive && (
          <div className="w-full">
            <button
              className={`w-2/4 cursor-pointer border-0 border-b-[1px] bg-transparent pb-2 font-sans text-xs ${active}`}
            >
              แผนก
            </button>
            <button
              className={`w-2/4 cursor-pointer border-0 border-b-[1px] bg-transparent pb-2 font-sans text-xs ${notactive}`}
              onClick={toggleActive}
            >
              สังกัด
            </button>
          </div>
        )}
      </div>
      <div className="mt-2 flex flex-col">
        {checkActive &&
          data.depart.map((d, i) => {
            return (
              <InformationBox
                name={d.name}
                good={d.good.amount}
                warn={d.warn.amount}
                dangerous={d.dangerous.amount}
                goodPercent={d.good.percent}
                warnPercent={d.warn.percent}
                dangerousPercent={d.dangerous.percent}
                key={i}
              />
            );
          })}
        {!checkActive &&
          data.aff.map((a, i) => {
            return (
              <InformationBox
                name={a.name}
                good={a.good.amount}
                warn={a.warn.amount}
                dangerous={a.dangerous.amount}
                goodPercent={a.good.percent}
                warnPercent={a.warn.percent}
                dangerousPercent={a.dangerous.percent}
                key={i}
              />
            );
          })}
      </div>
    </Card>
  );
};

export default SectionCard;

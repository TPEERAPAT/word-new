import Card from '@components/Card/Card';
import React from 'react';

import PeriodPopularityData from './MockPeriodPopularity';
import { Rectangle } from './Rectangle';

const PeriodPopularity = () => {
  const months = Object.keys(PeriodPopularityData);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const HeatMap = (
    <div className="flex gap-[6px]">
      <div className="mr-[10px] text-center">
        {days.map((day, i: number) => (
          <p key={i} className="mb-[6px] text-xs text-greyDarkOcare">
            {day}
          </p>
        ))}
      </div>
      {months.map((month, i: number) => {
        return (
          <div key={i} className="flex flex-col items-center justify-between">
            {days.map((eachDay, j: number) => {
              return (
                <div key={j}>
                  <Rectangle
                    // @ts-ignore
                    amount={PeriodPopularityData[month][eachDay] || 0}
                    month={month}
                    day={eachDay}
                  />
                </div>
              );
            })}
            <p className="mt-[6px] text-xs font-medium">{month}</p>
          </div>
        );
      })}
    </div>
  );

  function LegendItem({ color, text }: { color: string; text: string }) {
    return (
      <div className="mb-4 flex items-center">
        <div className={`mr-3 h-[16px] w-[24px] rounded-[2px] ${color}`} />
        <p className="text-xs font-normal">{text}</p>
      </div>
    );
  }

  const Legend = (
    <div className="flex w-full flex-col items-center">
      <div>
        <LegendItem color="bg-blueOcare" text="60+ VN" />
        <LegendItem color="bg-blueOcare/75" text="40 - 59 VN" />
        <LegendItem color="bg-blueOcare/50" text="20 - 39 VN" />
        <LegendItem color="bg-blueOcare/25" text="1 - 19 VN" />
        <LegendItem
          color="bg-white border-solid border-[1px] border-greyLightOcare"
          text="0 VN"
        />
      </div>
    </div>
  );

  return (
    <Card
      color="greySemiLightOcare"
      className="min-h-[245px] max-w-[640px] px-6 py-4"
    >
      <h3 className="mb-3 text-sm font-semibold">Period Popularity</h3>
      <div className="flex">
        {HeatMap}
        {Legend}
      </div>
    </Card>
  );
};

export default PeriodPopularity;

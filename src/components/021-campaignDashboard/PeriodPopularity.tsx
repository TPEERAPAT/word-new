import type { FC } from 'react';

import { Rectangle } from './Rectangle';

interface PeriodPopularityProps {
  Inform: any;
}

export const PeriodPopularity: FC<PeriodPopularityProps> = ({ Inform }) => {
  const redGradient = Inform.month.gradient;
  const greenGradient = Inform.day.gradient;
  const monthAmount = Inform.month.amount;
  const monthpercent = Inform.month.percent;
  const dayAmount = Inform.day.amount;
  const daypercent = Inform.day.percent;
  const month = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];
  const day = [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์',
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="text-[10px] text-greyDarkOcare">Month (Jan - Dec)</p>
        <div className="ml-1 flex">
          {redGradient.map((ele: any, index: number): any => {
            const fristItem = index === 0 ? '' : 'ml-[6px]';
            if (ele === 1) {
              return (
                <Rectangle
                  bgcolor={'bg-redOcare'}
                  color={'redOcare'}
                  style={`${fristItem}`}
                  label={month[index]}
                  amount={monthAmount[index]}
                  percent={monthpercent[index]}
                  key={index}
                />
              );
            }
            return (
              <Rectangle
                bgcolor={`bg-redGradientOcare-${ele}`}
                color={`redGradientOcare-${ele}`}
                style={`${fristItem}`}
                label={month[index]}
                amount={monthAmount[index]}
                percent={monthpercent[index]}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-[2px] flex flex-col">
        <p className="text-[10px] text-greyDarkOcare">Day (Mon - Sun)</p>
        <div className="ml-1 flex">
          {greenGradient.map((ele: any, index: number): any => {
            const fristItem = index === 0 ? '' : 'ml-[6px]';
            if (ele === 1) {
              return (
                <Rectangle
                  bgcolor={'bg-greenGradientOcare-600'}
                  color={'greenGradientOcare-600'}
                  label={day[index]}
                  style={`${fristItem}`}
                  amount={dayAmount[index]}
                  percent={daypercent[index]}
                  key={index}
                />
              );
            }
            return (
              <Rectangle
                bgcolor={`bg-greenGradientOcare-${ele}`}
                color={`greenGradientOcare-${ele}`}
                label={day[index]}
                amount={dayAmount[index]}
                percent={daypercent[index]}
                style={`${fristItem}`}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

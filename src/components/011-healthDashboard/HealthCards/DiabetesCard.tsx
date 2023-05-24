import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { diabetesProps } from '#types/HealthAnalytics';

import Condition from './Condition';
import Donutchart from './Donutchart';

interface DiabetesCardProps {
  data: diabetesProps;
}

const DiabetesCard: FC<DiabetesCardProps> = ({ data }) => {
  const datas = {
    label: [
      { name: 'ปกติ', percent: data.type1.percent },
      { name: 'เสี่ยงเบาหวาน', percent: data.type2.percent },
      { name: 'น้ำตาลต่ำ', percent: data.type3.percent },
      { name: 'เบาหวาน', percent: data.type4.percent },
    ],
    data: [
      data.type1.amount,
      data.type2.amount,
      data.type3.amount,
      data.type4.amount,
    ],
    backgroundColor: ['#198C35', '#043673', '#FF9500', '#B1231D'],
  };

  return (
    <Card color="greyRoundedOcare" className="w-full place-self-start p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium ">เบาหวาน</h1>
          <p className=" mt-1 text-xs text-greyDarkOcare">(Diabetes)</p>
        </div>
        <div className="ml-2 rounded-lg bg-backgroundOcare px-[11px] py-1">
          <h1 className="text-sm font-medium ">
            {data.overall.amount.toLocaleString()} คน
          </h1>
          <p className=" mt-1 text-right text-xs text-greyDarkOcare">
            ({data.overall.percent}%)
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <Donutchart datas={datas} />
        <div className="mb-2 ml-10 flex w-[70%] justify-start gap-4 self-end">
          <div className="flex flex-col">
            <Condition label="ปกติ" color="greenOcare" />
            <div className="mt-[6px]">
              <Condition label="เสี่ยงเบาหวาน" color="blueOcare" />
            </div>
          </div>
          <div className="flex flex-col">
            <Condition label="น้ำตาลต่ำ" color="orangeOcare" />
            <div className="mt-[6px]">
              <Condition label="เบาหวาน" color="redOcare" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiabetesCard;

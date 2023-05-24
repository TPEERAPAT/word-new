import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { hypertensionProps } from '#types/HealthAnalytics';

import Condition from './Condition';
import Donutchart from './Donutchart';

interface HyperTensionCardProps {
  data: hypertensionProps;
}

const HyperTensionCard: FC<HyperTensionCardProps> = ({ data }) => {
  const datas = {
    label: [
      { name: 'ปกติ', percent: data.type1.percent },
      { name: 'เริ่มสูง', percent: data.type2.percent },
      { name: 'สูงระดับ 1', percent: data.type3.percent },
      { name: 'สูงระดับ 2', percent: data.type4.percent },
      { name: 'สูงระดับ 3', percent: data.type5.percent },
    ],
    data: [
      data.type1.amount,
      data.type2.amount,
      data.type3.amount,
      data.type4.amount,
      data.type5.amount,
    ],
    backgroundColor: ['#198C35', '#043673', '#572485', '#FF9500', '#B1231D'],
  };

  return (
    <Card color="greyRoundedOcare" className="w-full place-self-start p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium ">ความดันโลหิตสูง</h1>
          <p className=" mt-1 text-xs text-greyDarkOcare">(Hypertension)</p>
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
        <div className="mb-2 ml-10 flex w-[70%] justify-start gap-4 self-start ">
          <div className="flex flex-col justify-end">
            <Condition label="สูงระดับ 1" color="purpleOcare" />
            <div className="mt-[6px]">
              <Condition label="สูงระดับ 2" color="orangeOcare" />
            </div>
            <div className="mt-[6px]">
              <Condition label="สูงระดับ 3" color="redOcare" />
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Condition label="ปกติ" color="greenOcare" />
            <div className="mt-[6px]">
              <Condition label="เริ่มสูง" color="blueOcare" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HyperTensionCard;

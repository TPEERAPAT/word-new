import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { obesityProps } from '#types/HealthAnalytics';

import Condition from './Condition';
import Status from './Status';

interface ObesityPhaseProps {
  color: string;
  phase: string;
  w: number;
  amount: number;
  percent: number;
}
const ObesityPhase: FC<ObesityPhaseProps> = ({
  color,
  phase,
  w,
  percent,
  amount,
}) => {
  return (
    <div
      className={`flex flex-col items-center`}
      style={{ width: `${w + 5}%` }}
    >
      <Status
        color={color}
        percent={percent}
        amount={amount.toString()}
        status={phase}
        left={-20}
      />
    </div>
  );
};

interface ObesityProps {
  data: obesityProps;
}

const ObesityCard: FC<ObesityProps> = ({ data }) => {
  return (
    <Card color="[#F2F2F7]" className="w-full place-self-start p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium ">โรคอ้วน</h1>
          <p className=" mt-1 text-xs text-greyDarkOcare">(Obesity)</p>
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
      <div className="mr-1 mt-8 flex  w-full flex-row justify-between gap-1">
        <ObesityPhase
          color="blueOcare"
          phase="ผอม"
          w={data.type1.percent * 0.8}
          amount={data.type1.amount}
          percent={data.type1.percent}
        />
        <ObesityPhase
          color="greenOcare"
          phase="สมส่วน"
          w={data.type3.percent * 0.8}
          amount={data.type3.amount}
          percent={data.type3.percent}
        />
        <ObesityPhase
          color="yellowLightOcare"
          phase="นำ้หนักเกิน"
          w={data.type2.percent * 0.8}
          amount={data.type2.amount}
          percent={data.type2.percent}
        />
        <ObesityPhase
          color="orangeOcare"
          phase="อ้วนระดับ 1"
          w={data.type4.percent * 0.8}
          amount={data.type4.amount}
          percent={data.type4.percent}
        />
        <ObesityPhase
          color="redOcare"
          phase="อ้วนระดับ 2"
          w={data.type5.percent * 0.8}
          amount={data.type5.amount}
          percent={data.type5.percent}
        />
      </div>
      <div className="flex flex-row items-center justify-around gap-2 pt-6">
        <Condition label="ผอม" color="blueOcare" />
        <Condition label="สมส่วน" color="greenOcare" />
        <Condition label="นำ้หนักเกิน" color="yellowLightOcare" />
        <Condition label="อ้วนระดับ 1" color="orangeOcare" />
        <Condition label="อ้วนระดับ 2" color="redOcare" />
      </div>
    </Card>
  );
};

export default ObesityCard;

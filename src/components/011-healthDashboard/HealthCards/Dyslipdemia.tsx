import BarGraph from '@components/011-healthDashboard/BarGraph';
import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { dyslipidemiaProps } from '#types/HealthAnalytics';

interface FatValueProps {
  text: string;
  count: number;
  color: string;
  bgcolor: string;
  percent: number;
}

const FatValue: FC<FatValueProps> = ({
  text,
  count,
  color,
  bgcolor,
  percent,
}) => {
  const TextColor = `text-${color}`;

  return (
    <div className="mt-[30px]">
      <div className="flex justify-between">
        <p className="text-xs font-medium">{text}</p>
        <p className={`${TextColor} text-sm font-semibold`}>
          {count.toLocaleString('en-US')} คน
        </p>
      </div>
      <div className="mt-1">
        <BarGraph
          orentation="horizontal"
          amount={count}
          percent={percent}
          label={'คอลเลสเตอรอล'}
          color={color}
          bgcolor={bgcolor}
        />
      </div>
    </div>
  );
};

interface DyslipdemiaCardProps {
  data: dyslipidemiaProps;
}

const DyslipdemiaCard: FC<DyslipdemiaCardProps> = ({ data }) => {
  return (
    <Card
      color="greyRoundedOcare"
      className="h-[370px] w-full place-self-start p-4 pb-[55px]"
    >
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium ">ไขมันในเลือดผิดปกติ</h1>
          <p className=" mt-1 text-xs text-greyDarkOcare">(Dyslipidemia)</p>
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

      <div className="mt-1">
        <FatValue
          text="คอลเลสเตอรอล"
          count={data.cholesterol.amount}
          color="blueOcare"
          bgcolor="blueLightOcare"
          percent={data.cholesterol.percent}
        />
        <FatValue
          text="ไตรกลีเซอไรด์"
          count={data.triglyceride.amount}
          color="greenOcare"
          bgcolor="greenLightOcare"
          percent={data.triglyceride.percent}
        />
        <FatValue
          text="ไขมันดี"
          count={data.goodfat.amount}
          color="orangeOcare"
          bgcolor="orangeLightOcare"
          percent={data.goodfat.percent}
        />
        <FatValue
          text="เขมันเลว"
          count={data.badfat.amount}
          color="redOcare"
          bgcolor="redLightOcare"
          percent={data.badfat.percent}
        />
      </div>
    </Card>
  );
};

export default DyslipdemiaCard;

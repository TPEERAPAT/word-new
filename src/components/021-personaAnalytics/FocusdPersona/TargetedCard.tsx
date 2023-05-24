import Card from '@components/Card/Card';
import BarGraph from '@components/Chart/BarGraph';
import type { FC } from 'react';
import React from 'react';

interface ProviceValueProps {
  text: string;
  count: number;
  color: string;
  bgcolor: string;
  percent: number;
}

const ProviceValue: FC<ProviceValueProps> = ({
  text,
  count,
  color,
  bgcolor,
  percent,
}) => {
  const TextColor = `text-${color}`;

  return (
    <div className="mt-4">
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
          label={'ปกติ'}
          color={color}
          bgcolor={bgcolor}
        />
      </div>
    </div>
  );
};

const TargetedCard = () => {
  return (
    <Card
      color="greySemiLightOcare"
      className="min-h-[245px] max-w-[444px] px-6 py-4"
    >
      <h3 className="text-sm font-semibold">Targeted</h3>
      <div className="flex flex-col gap-3">
        <ProviceValue
          text="กรุงเทพมหานคร"
          count={2560}
          color="greenOcare"
          bgcolor="greenLightOcare"
          percent={70}
        />
        <ProviceValue
          text="สมุทรปราการ"
          count={3809}
          color="orangeOcare"
          bgcolor="orangeLightOcare"
          percent={56}
        />
        <ProviceValue
          text="นนทบุรี"
          count={1060}
          color="redOcare"
          bgcolor="redLightOcare"
          percent={17}
        />
      </div>
    </Card>
  );
};

export default TargetedCard;

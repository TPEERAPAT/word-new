import type { FC } from 'react';
import React from 'react';

interface HealthstatusProps {
  name: string;
  amount: number;
  percent: number;
  color: string;
}

const Healthstatus: FC<HealthstatusProps> = ({
  name,
  amount,
  percent,
  color,
}) => {
  const BackgroundColor = `bg-${color}`;

  return (
    <div className="mb-5 flex items-center justify-between">
      {/* {Object.entries(province_th).map(([key, value]) => (
        <Menu key={key} name={value} value={key} sector="north" />
      ))} */}
      <div className="flex items-center">
        <span className={`h-2 w-2 rounded-full ${BackgroundColor}`}></span>
        <p className="ml-[6px] text-[8px] font-medium">{name}</p>
      </div>

      <div className="flex">
        <p className="text-[8px] font-semibold">
          {amount.toLocaleString()} คน{' '}
          <span className="font-normal text-greyDarkOcare">({percent}%)</span>
        </p>
      </div>
    </div>
  );
};
export default Healthstatus;

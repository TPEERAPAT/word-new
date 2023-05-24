import Status from '@components/011-healthDashboard/HealthCards/Status';
import type { FC } from 'react';

import { PeriodPopularity } from './PeriodPopularity';

interface PotentialRangeProps {
  color: string;
  label: string;
  w: number;
  percent: number;
  amount: string;
  left: number;
}
const PotentialRange: FC<PotentialRangeProps> = ({
  color,
  label,
  w,
  percent,
  amount,
  left,
}) => {
  return (
    <div
      className="mx-1 flex min-w-[47px] max-w-[231px] flex-col  items-center"
      style={{ width: `${w}%` }}
    >
      <Status
        color={color}
        percent={percent}
        amount={amount}
        status={label}
        left={left}
      />
      <p className="mt-1 text-xs text-greyDarkOcare">{label}</p>
    </div>
  );
};

interface PotentialboxProps {
  notfirst?: boolean;
  nameTH: string;
  nameEN: string;
  numbers: number;
  valuation: number;
  location: any;
  popularity: any;
}

const Potentialbox: FC<PotentialboxProps> = ({
  notfirst = false,
  nameTH,
  nameEN,
  numbers,
  valuation,
  location,
  popularity,
}) => {
  return (
    <div
      className={`flex h-[70px] w-full items-center rounded bg-backgroundOcare p-4 pr-[85px] ${
        notfirst ? 'mt-4' : ''
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-xs font-medium">{nameTH}</h1>
        <p className="mt-1 text-[10px] text-greyDarkOcare">{nameEN}</p>
      </div>

      <div className="ml-[7.5%]">
        <h1 className="text-center text-xs font-bold">
          {numbers.toLocaleString()}
        </h1>
        <p className="text-center text-xs">ราย</p>
      </div>
      <div className="ml-[3.5%]">
        <h1 className="text-center text-xs font-bold">
          {valuation.toLocaleString()}
        </h1>
        <p className="text-center text-xs">บาท</p>
      </div>
      <div className="ml-[15%] flex w-[18.5%]">
        <PotentialRange
          left={-20}
          color="greenOcare"
          w={location.green.width}
          label={location.green.label}
          percent={location.green.percent}
          amount={location.green.amount}
        />
        <PotentialRange
          left={-20}
          color="orangeOcare"
          w={location.orange.width}
          label={location.orange.label}
          percent={location.orange.percent}
          amount={location.orange.amount}
        />
        <PotentialRange
          left={-20}
          color="redOcare"
          w={location.red.width}
          label={location.red.label}
          percent={location.red.percent}
          amount={location.red.amount}
        />
      </div>
      <div className="ml-[14%]">
        <PeriodPopularity Inform={popularity} />
      </div>
    </div>
  );
};
export default Potentialbox;

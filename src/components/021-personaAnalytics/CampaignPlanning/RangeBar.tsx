import Status from '@components/Chart/Status';
import type { FC } from 'react';

interface RangeBarProps {
  color: string;
  label: string;
  w: number;
  percent: number;
  amount: string;
  customAmount?: React.ReactNode;
  left: number;
}
const RangeBar: FC<RangeBarProps> = ({
  color,
  label,
  w,
  percent,
  amount,
  customAmount,
  left,
}) => {
  return (
    <div
      className="mx-2 flex min-w-[110px] flex-col items-center"
      style={{ width: `${w}%` }}
    >
      <Status
        color={color}
        percent={percent}
        amount={amount}
        status={label}
        left={left}
        lineWeight="[8px]"
      />
      {customAmount || <p className="mt-2 font-semibold">{amount}</p>}
      <p className="mt-1 text-xs text-greyDarkOcare">{label}</p>
    </div>
  );
};

export default RangeBar;

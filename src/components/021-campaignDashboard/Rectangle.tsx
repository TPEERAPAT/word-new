import Tooltips from '@components/Ui/Tooltips';
import type { FC } from 'react';
import { useState } from 'react';

interface RectangleProps {
  bgcolor: string;
  style: string;
  label: string | undefined;
  amount: string;
  percent: string;
  color: string;
}
export const Rectangle: FC<RectangleProps> = ({
  bgcolor,
  style,
  label,
  amount,
  percent,
  color,
}) => {
  const [tooltipStatus, setTooltipStatus] = useState<boolean>(false);

  const tooltipStatusHandler = (status: string) => {
    if (status === 'in') {
      setTooltipStatus(true);
    } else if (status === 'out') {
      setTooltipStatus(false);
    }
  };
  return (
    <div
      className={`relative h-3 w-3 rounded-[1px] ${bgcolor} ${style}`}
      onMouseOver={() => tooltipStatusHandler('in')}
      onMouseOut={() => tooltipStatusHandler('out')}
    >
      {tooltipStatus && (
        <div className="block">
          <Tooltips
            top="-33px"
            left={`-30px`}
            style="-translate-x-2/4 -translate-y-2/4 right-[-30px] w-"
            color={color}
            label={label}
            text={`${amount} คน (${percent}%)`}
          />
        </div>
      )}
    </div>
  );
};

import Tooltips from '@components/Ui/Tooltips';
import type { FC } from 'react';
import { useState } from 'react';

interface RectangleProps {
  amount: number;
  month: string;
  day: string;
}
export const Rectangle: FC<RectangleProps> = ({ amount, month, day }) => {
  const [tooltipStatus, setTooltipStatus] = useState<boolean>(false);

  const tooltipStatusHandler = (status: string) => {
    if (status === 'in') {
      setTooltipStatus(true);
    } else if (status === 'out') {
      setTooltipStatus(false);
    }
  };

  const BackGroundColor = () => {
    if (amount === 0) {
      return 'bg-white border-solid border-[1px] border-greyLightOcare';
    }
    if (amount > 0 && amount <= 19) {
      return 'bg-blueOcare/25';
    }
    if (amount > 19 && amount <= 39) {
      return 'bg-blueOcare/50';
    }
    if (amount > 39 && amount <= 59) {
      return 'bg-blueOcare/75';
    }
    return 'bg-blueOcare';
  };

  const DayFullName = () => {
    switch (day) {
      case 'Mon':
        return 'Monday';
      case 'Tue':
        return 'Tuesday';
      case 'Wed':
        return 'Wednesday';
      case 'Thu':
        return 'Thursday';
      case 'Fri':
        return 'Friday';
      case 'Sat':
        return 'Saturday';
      case 'Sun':
        return 'Sunday';
      default:
        return 'Monday';
    }
  };

  return (
    <div
      className={`relative mb-[6px] h-[16px] w-[24px] rounded-[2px] ${BackGroundColor()}`}
      onMouseOver={() => tooltipStatusHandler('in')}
      onMouseOut={() => tooltipStatusHandler('out')}
    >
      {tooltipStatus && (
        <div className="block">
          <Tooltips
            top="-33px"
            left={`-41px`}
            style="-translate-x-2/4 -translate-y-2/4 right-[-30px] w-[110px]"
            color="blueOcare"
            label={`${DayFullName()} (${month})`}
            text={`${amount} VN`}
          />
        </div>
      )}
    </div>
  );
};

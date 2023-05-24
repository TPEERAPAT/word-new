import Tooltips from '@components/Ui/Tooltips';
import type { FC } from 'react';
import { useState } from 'react';

interface StatusProps {
  amount: string;
  percent: number;
  color: string;
  status: string;
  left?: number;
  lineWeight?: string;
}

const Status: FC<StatusProps> = ({
  amount,
  percent,
  color,
  status,
  left,
  lineWeight,
}) => {
  const [tooltipStatus, setTooltipStatus] = useState<boolean>(false);

  const tooltipStatusHandler = (eachStatus: string) => {
    if (eachStatus === 'in') {
      setTooltipStatus(true);
    } else if (eachStatus === 'out') {
      setTooltipStatus(false);
    }
  };

  const StatusHeight = `h-${lineWeight || 1}`;
  const BackgroundColor = `bg-${color}`;
  const HoverOutlineColor = `hover:outline-${color}Hover`;

  return (
    <>
      <div className={`relative ${StatusHeight} w-full rounded `}>
        {tooltipStatus && (
          <div className="block" data-testid="status-tooltips-test">
            <Tooltips
              top="-33px"
              left={`${left}px`}
              style="-translate-x-2/4 -translate-y-2/4 right-[-30px] w-"
              color={color}
              label={status}
              text={`${amount} คน (${percent}%)`}
            />
          </div>
        )}
        <div
          className={`
            ${BackgroundColor}
            ${HoverOutlineColor} 
            relative h-full w-full rounded hover:outline hover:outline-4
          `}
          onMouseOver={() => tooltipStatusHandler('in')}
          onMouseOut={() => tooltipStatusHandler('out')}
          data-testid="status-test"
        />
      </div>
    </>
  );
};

export default Status;

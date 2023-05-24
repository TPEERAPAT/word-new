/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import Tooltips from '@components/Ui/Tooltips';
import type { FC } from 'react';
import { useState } from 'react';

interface BarGraphProps {
  orentation: 'vertical' | 'horizontal';
  amount: number;
  percent: number;
  label: string;
  color: string;
  bgcolor?: string;
  showAmount?: boolean;
}

const BarGraph: FC<BarGraphProps> = ({
  orentation,
  amount,
  percent,
  label,
  color,
  bgcolor = 'greyLightOcare',
  showAmount = false,
}) => {
  const [tooltipStatus, setTooltipStatus] = useState<boolean>(false);

  const tooltipStatusHandler = (status: string) => {
    if (status === 'in') {
      setTooltipStatus(true);
    } else if (status === 'out') {
      setTooltipStatus(false);
    }
  };

  const verticalRender = () => {
    return (
      <>
        <div className="flex flex-col h-full items-center align-end justify-end gap-2">
          {showAmount && (
            <p
              className={` text-center font-semibold text-sm leading-4 text-${color}`}
            >
              {amount}
              <br />
              <span>คน</span>
            </p>
          )}

          <div
            className={`relative w-1 bg-${color} rounded-[99px] transition-all hover:outline hover:outline-4 hover:outline-${color}Hover`}
            onMouseOver={() => tooltipStatusHandler('in')}
            onMouseOut={() => tooltipStatusHandler('out')}
            style={{ height: `${percent}%` }}
            data-testid="bar-graph-test"
          >
            {tooltipStatus && (
              <div className="block" data-testid="bar-graph-tooltips-test">
                <Tooltips
                  top={`${showAmount ? percent - 100 : percent - 150}%`}
                  left="-33px"
                  color={color}
                  label={label}
                  text={`${amount} คน (${percent}%)`}
                />
              </div>
            )}
          </div>

          <div className="text-[8px] font-bold">{label}</div>
        </div>
      </>
    );
  };

  const horizontalWithAmount = () => {
    return (
      <>
        <div className={`flex items-center justify-between w-full`}>
          <p className={`text-[9px] self-start`}>{label}</p>
          <div className={`relative w-[80%] h-1 rounded bg-${bgcolor}`}>
            {tooltipStatus && (
              <div className="block" data-testid="bar-graph-tooltips-test">
                <Tooltips
                  top="-33px"
                  left={`${percent - 14}%`}
                  color={color}
                  label={label}
                  text={`${amount} คน (${percent}%)`}
                />
              </div>
            )}

            <div
              className={`relative h-full bg-${color} hover:outline hover:outline-4 hover:outline-${color}Hover rounded`}
              style={{ width: `${percent}%` }}
              onMouseOver={() => tooltipStatusHandler('in')}
              onMouseOut={() => tooltipStatusHandler('out')}
              data-testid="bar-graph-test"
            />
          </div>
        </div>
      </>
    );
  };

  const horizontalWithoutAmount = () => {
    return (
      <>
        <div className={`flex items-center justify-between w-full`}>
          <div className={`relative w-full h-1 rounded bg-${bgcolor}`}>
            {tooltipStatus && (
              <div className="block" data-testid="bar-graph-tooltips-test">
                <Tooltips
                  top="-33px"
                  left={`${percent - 14}%`}
                  color={color}
                  label={label}
                  text={`${amount} คน (${percent}%)`}
                />
              </div>
            )}

            <div
              className={`relative h-full bg-${color} hover:outline hover:outline-4 hover:outline-${color}Hover rounded`}
              style={{ width: `${percent}%` }}
              onMouseOver={() => tooltipStatusHandler('in')}
              onMouseOut={() => tooltipStatusHandler('out')}
              data-testid="bar-graph-test"
            />
          </div>
        </div>
      </>
    );
  };

  if (orentation === 'vertical') {
    return verticalRender();
  }
  if (showAmount) {
    return horizontalWithAmount();
  }
  return horizontalWithoutAmount();
};

export default BarGraph;

import type { FC } from 'react';

import Status from './Status';

interface InformationBoxProps {
  name: string;
  good: number;
  warn: number;
  dangerous: number;
  goodPercent: number;
  warnPercent: number;
  dangerousPercent: number;
}

const InformationBox: FC<InformationBoxProps> = ({
  name,
  good,
  warn,
  dangerous,
  goodPercent,
  warnPercent,
  dangerousPercent,
}) => {
  return (
    <div className="mt-3 flex items-center justify-between rounded-md bg-white px-3 py-[6px]">
      <p className="text-sm font-medium">{name}</p>
      <div className="flex w-[60%] items-center">
        <div className=" mr-3 flex w-[80%] items-center">
          <div
            className="mr-1 flex min-w-[7px] flex-col items-center"
            style={{ width: `${goodPercent}%` }}
          >
            <Status
              color="greenOcare"
              percent={goodPercent}
              amount={good.toString()}
              status="ปกติ"
              left={-20}
            />
          </div>
          <div
            className="mr-1 flex min-w-[7px] flex-col items-center"
            style={{ width: `${warnPercent}%` }}
          >
            <Status
              color="orangeOcare"
              percent={warnPercent}
              amount={warn.toString()}
              status="เสี่ยง"
              left={-25}
            />
          </div>
          <div
            className="flex min-w-[7px] flex-col items-center"
            style={{ width: `${dangerousPercent}%` }}
          >
            <Status
              color="redOcare"
              percent={dangerousPercent}
              amount={dangerous.toString()}
              status="อันตราย"
            />
          </div>
        </div>
        <p className="whitespace-nowrap text-sm font-semibold	">210 คน</p>
      </div>
    </div>
  );
};

export default InformationBox;

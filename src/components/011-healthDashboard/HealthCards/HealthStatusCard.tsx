import Card from '@components/Card/Card';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { RiHeartPulseFill } from 'react-icons/ri';

import type { healthStatusProps } from '#types/HealthAnalytics';

interface HealthStatusProps {
  status: string;
  percent: number;
  count: number;
  contentAxisX: boolean;
}

const HealthStatus: FC<HealthStatusProps> = ({
  status,
  percent,
  count,
  contentAxisX,
}) => {
  const [statusText, setStatusText] = useState<string>('สุขภาพปกติ');
  const [color, setColor] = useState<string>('greenOcare');
  const [bgcolor, setBGColor] = useState<string>('greenOcare');

  useEffect(() => {
    function checkstatus() {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'dangerous':
          setStatusText('สุขภาพมีปัญหา');
          setColor('redOcare');
          setBGColor('redLightOcare');
          break;
        case 'warn':
          setStatusText('มีความเสี่ยงสุขภาพ');
          setColor('orangeOcare');
          setBGColor('orangeLightOcare');
          break;
        case 'good':
          setStatusText('สุขภาพปกติ');
          setColor('greenOcare');
          setBGColor('greenLightOcare');
          break;
      }
    }
    checkstatus();
  }, [status]);

  const FillColor = `fill-${color}`;
  const BackgroundColor = `bg-${bgcolor}`;

  return (
    <div className={`flex ${contentAxisX ? 'flex-row' : 'flex-col'}`}>
      <div
        className={`
          flex
          h-auto
          flex-row
          gap-4
          lg:flex-col
        `}
      >
        <div
          className={`${BackgroundColor} flex h-[48px] w-[48px] items-center justify-center rounded-full`}
        >
          <RiHeartPulseFill size={20} className={FillColor} />
        </div>

        <div>
          <h1
            className={`
              mt-2 flex 
              flex-row gap-2 font-normal text-gray-900
              ${contentAxisX ? 'text-[16px]' : 'text-[24px]'}
            `}
          >
            <span className="font-semibold">
              {count.toLocaleString('en-US')} คน
            </span>{' '}
            <p className="font-normal">({percent}%)</p>
          </h1>
          <p className="text-greyOcare">{statusText}</p>
        </div>
      </div>
    </div>
  );
};

interface HealthStatusCardProps {
  data: healthStatusProps;
  contentAxisX: boolean;
}

const HealthStatusCard: FC<HealthStatusCardProps> = ({
  data,
  contentAxisX,
}) => {
  return (
    <Card className="h-auto w-[100%] p-4">
      <p className="font-medium">
        สภาวะสุขภาพ
        <span className="ml-2 text-greyDarkOcare">(Health Status)</span>
      </p>

      <div className="mt-4 flex w-[100%] flex-col justify-between divide-x px-[1em] sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="flex">
          <HealthStatus
            contentAxisX={contentAxisX}
            status="dangerous"
            count={data.dangerous.amount}
            percent={data.dangerous.percent}
          />
        </div>

        <div className="my-[1em] border-[1px] border-solid border-[#D9D9D9] lg:border-none xl:border-none" />

        <div className="flex">
          <div className="border-0 border-solid border-[#D9D9D9] sm:border-0 md:border-0 lg:mx-[1em] lg:border-[1px] xl:mx-[1em] xl:border-[1px]" />
          <HealthStatus
            contentAxisX={contentAxisX}
            status="warn"
            count={data.warn.amount}
            percent={data.warn.percent}
          />
        </div>

        <div className="my-[1em] border-[1px] border-solid border-[#D9D9D9] lg:border-none xl:border-none" />

        <div className="flex">
          <div className="border-0 border-solid border-[#D9D9D9] sm:border-0 md:border-0 lg:mx-[1em] lg:border-[1px] xl:mx-[1em] xl:border-[1px]" />
          <HealthStatus
            contentAxisX={contentAxisX}
            status="good"
            count={data.good.amount}
            percent={data.good.percent}
          />
        </div>
      </div>
      {!contentAxisX && <hr className="my-[20px] opacity-40" />}
    </Card>
  );
};

export default HealthStatusCard;

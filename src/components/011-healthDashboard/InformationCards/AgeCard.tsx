import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { AgeRange } from '#types/HealthAnalytics';

import BarGraph from '../BarGraph';

interface AgeCardProps {
  data: AgeRange[];
}

const AgeCard: FC<AgeCardProps> = ({ data }) => {
  return (
    <>
      <Card color="greyRoundedOcare" className="p-4">
        <p className="font-medium">
          ช่วงอายุ
          <span className="ml-2 text-greyDarkOcare">(Age range)</span>
        </p>
        <div className="mr-4 mt-4 flex flex-wrap justify-center">
          <div className="flex h-[80px] w-full items-end justify-between">
            <BarGraph
              orentation={'vertical'}
              amount={data[2]?.PatientCount || 0}
              percent={data[2]?.PatientCount || 0}
              label={'< 30 ปี'}
              color={'blueOcare'}
            />

            <BarGraph
              orentation={'vertical'}
              amount={data[1]?.PatientCount || 0}
              percent={data[1]?.PatientCount || 0}
              label={'31-40 ปี'}
              color={'redOcare'}
            />

            <BarGraph
              orentation={'vertical'}
              amount={data[3]?.PatientCount || 0}
              percent={data[3]?.PatientCount || 0}
              label={'41-50 ปี'}
              color={'greenOcare'}
            />

            {/* <BarGraph
              orentation={'vertical'}
              amount={data.range4.amount}
              percent={data.range4.percent}
              label={'51-60 ปี'}
              color={'orangeOcare'}
            /> */}

            <BarGraph
              orentation={'vertical'}
              amount={data[0]?.PatientCount || 0}
              percent={data[0]?.PatientCount || 0}
              label={'> 60 ปี'}
              color={'purpleOcare'}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default AgeCard;

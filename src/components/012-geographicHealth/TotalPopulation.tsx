import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { provinceData } from '#types/GeographicHealth';

interface TotalPopulationProps {
  data: provinceData[];
}

const TotalPopulation: FC<TotalPopulationProps> = ({ data }) => {
  const calculateSummation = () => {
    let sum = 0;

    data.forEach((d: provinceData) => {
      sum +=
        d.healthStatus.dangerous.amount +
        d.healthStatus.warn.amount +
        d.healthStatus.good.amount;
    });

    return sum;
  };

  return (
    <div className="mt-8 h-auto w-[100%]">
      <Card
        shadow
        className="flex flex-col justify-start px-[2em] py-[1em] sm:flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between "
      >
        <div className="flex flex-col ">
          <h1 className="text-[16px] leading-[24px]">จำนวนประชากรทั้งหมด</h1>
          <p className="text-[12px] text-greyDarkOcare">(Total population)</p>
        </div>
        <div className="flex">
          <p className="text-[32px] font-bold text-blueOcare">
            {calculateSummation().toLocaleString()} คน
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TotalPopulation;

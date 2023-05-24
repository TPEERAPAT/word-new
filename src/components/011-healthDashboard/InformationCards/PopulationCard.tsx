import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { AgeRange } from '#types/HealthAnalytics';

interface PopulationCardProps {
  data: AgeRange[];
}

const PopulationCard: FC<PopulationCardProps> = ({ data }) => {
  const sum = data.reduce(
    (accumulator, item) => accumulator + item.PatientCount,
    0
  );
  return (
    <Card shadow={false} className="flex flex-row pb-2">
      <div className="flex flex-row items-center gap-5">
        {/* not found the symbol */}
        <h1>{'A'}</h1>
        <div>
          <h1 className="text-sm font-medium text-greyOcare">
            {'จำนวนประชากรทั้งหมด'}
          </h1>
          <p className=" mt-1 text-xs text-greyDarkOcare">(Total population)</p>
        </div>

        <p className="flex text-[40px] font-bold text-blackOcare">
          {/* {data.toLocaleString()} คน */}
          {`${sum} คน`}
        </p>
      </div>
    </Card>
  );
};

export default PopulationCard;

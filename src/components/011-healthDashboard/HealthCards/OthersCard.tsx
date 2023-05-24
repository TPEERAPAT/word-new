import BarGraph from '@components/011-healthDashboard/BarGraph';
import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { othersProps } from '#types/HealthAnalytics';

interface OthersCardProps {
  data: othersProps;
}

const OthersCard: FC<OthersCardProps> = ({ data }) => {
  return (
    <Card shadow className="w-full place-self-start p-4">
      <p className="font-medium">
        โรคอื่นๆ
        <span className="ml-2 text-greyDarkOcare ">(Others Disease)</span>
      </p>

      <div className="mr-4 mt-4 flex h-[185px] flex-wrap justify-center">
        <div className="flex h-full w-full items-end justify-between">
          <BarGraph
            orentation="vertical"
            amount={data.other1.amount}
            percent={data.other1.percent}
            label={'เลือดจาง'}
            color={'redOcare'}
            showAmount
          />
          <BarGraph
            orentation="vertical"
            amount={data.other2.amount}
            percent={data.other2.percent}
            label={'เกาต์'}
            color={'blueOcare'}
            showAmount
          />
          <BarGraph
            orentation="vertical"
            amount={data.other3.amount}
            percent={data.other3.percent}
            label={'กระดูกพรุน'}
            color={'orangeOcare'}
            showAmount
          />
          <BarGraph
            orentation="vertical"
            amount={data.other4.amount}
            percent={data.other4.percent}
            label={'สายตาสั้น'}
            color={'greenOcare'}
            showAmount
          />
        </div>
      </div>
    </Card>
  );
};

export default OthersCard;

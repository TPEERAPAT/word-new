import BarGraph from '@components/011-healthDashboard/BarGraph';
import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { insuranceProps } from '#types/HealthAnalytics';

interface InsuranceCardProps {
  data: insuranceProps;
}

const InsuranceCard: FC<InsuranceCardProps> = ({ data }) => {
  return (
    <>
      <Card color="greyRoundedOcare" className="p-4">
        <p className="font-medium">
          สิทธิการรักษา
          <span className="ml-2 text-greyDarkOcare">(Insurance)</span>
        </p>

        <div className="mx-4 my-2 flex grow flex-col gap-2">
          <BarGraph
            orentation={'horizontal'}
            amount={data.type1.amount}
            percent={data.type1.percent}
            label={'ข้าราชการ'}
            color={'greenOcare'}
            showAmount
          />

          <BarGraph
            orentation={'horizontal'}
            amount={data.type2.amount}
            percent={data.type2.percent}
            label={'ประกันสังคม'}
            color={'redOcare'}
            showAmount
          />

          <BarGraph
            orentation={'horizontal'}
            amount={data.type3.amount}
            percent={data.type3.percent}
            label={'ชำระเงินเอง'}
            color={'blueOcare'}
            showAmount
          />

          <BarGraph
            orentation={'horizontal'}
            amount={data.type4.amount}
            percent={data.type4.percent}
            label={'บัตรทอง'}
            color={'orangeOcare'}
            showAmount
          />
        </div>
      </Card>
    </>
  );
};

export default InsuranceCard;

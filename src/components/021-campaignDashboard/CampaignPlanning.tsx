import 'react-datepicker/dist/react-datepicker.css';

import Status from '@components/011-healthDashboard/HealthCards/Status';
import Card from '@components/Card/Card';
import type { FC, LegacyRef } from 'react';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { IoAlertCircleSharp, IoCaretDown } from 'react-icons/io5';

interface CampaignPlanningProps {
  color: string;
  label: string;
  w: number;
  percent: number;
  amount: string;
  left: number;
}
const CampaignPlanningRange: FC<CampaignPlanningProps> = ({
  color,
  label,
  w,
  percent,
  amount,
  left,
}) => {
  return (
    <div
      className="mx-2 flex min-w-[110px] flex-col items-center"
      style={{ width: `${w}%` }}
    >
      <Status
        color={color}
        percent={percent}
        amount={amount}
        status={label}
        left={left}
      />
      <p className="mt-2 font-semibold">{amount}</p>
      <p className="mt-1 text-xs text-greyDarkOcare">{label}</p>
    </div>
  );
};

const CampaignPlanning = () => {
  const [startDate, setStartDate] = useState(new Date('2023-07-1'));
  const [endDate, setEndDate] = useState<any>(new Date('2023-09-30'));
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const BtnPicker = () => {
    // eslint-disable-next-line react/display-name
    const BtnPickerCustomInput = forwardRef(
      (props: any, ref: LegacyRef<HTMLDivElement>) => (
        <div onClick={props.onClick} ref={ref}>
          <IoCaretDown className="fill-greyDarkOcare" />
        </div>
      )
    );

    return (
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        customInput={<BtnPickerCustomInput />}
      />
    );
  };

  return (
    <Card shadow className="relative  w-full py-5">
      <div className="flex justify-between pl-14 pr-11">
        <div>
          <IoAlertCircleSharp className="fill-blueOcare" size={48} />
        </div>

        <div className="ml-6 flex flex-col">
          <h1 className="text-xl">วางแผนแคมเปญ ระหว่างช่วงเวลา</h1>
          <div className="  flex items-center justify-around">
            <p className="text-greyDarkOcare underline decoration-greyDarkOcare">
              {startDate.toLocaleString('th-TH', {
                day: 'numeric',
                month: 'long',
              })}{' '}
              -{' '}
              {endDate?.toLocaleString('th-TH', { dateStyle: 'long' }) ||
                'สิ้นสุดที่...'}
            </p>
            <div className="w-auto">
              <BtnPicker />
            </div>
          </div>
        </div>
        <div className="flex h-12 w-40 flex-col items-center justify-center rounded-lg bg-greyLightOcare text-center">
          <p className="text-sm font-semibold">125</p>
          <p className="text-xs text-greyDarkOcare">รายการตรวจ</p>
        </div>
      </div>
      <div className="mt-7 flex justify-between px-4">
        <CampaignPlanningRange
          left={-20}
          color="greenOcare"
          w={15}
          label="Total campaigns"
          percent={100}
          amount={'12'}
        />
        <CampaignPlanningRange
          left={160}
          color="orangeOcare"
          w={65}
          label="Expected number of patients"
          percent={100}
          amount={'12,000 คน'}
        />
        <CampaignPlanningRange
          left={-20}
          color="redOcare"
          w={15}
          label="Estimated Valuation"
          percent={100}
          amount={'12,000'}
        />
      </div>

      <span
        className=" absolute bottom-[-9px] left-[47.8%] h-0 w-0"
        style={{
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
          borderTop: '10px solid #FFF',
        }}
      ></span>
    </Card>
  );
};

export default CampaignPlanning;

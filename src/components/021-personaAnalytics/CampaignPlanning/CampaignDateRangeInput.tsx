import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import type { FC, LegacyRef } from 'react';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { AiOutlineCalendar } from 'react-icons/ai';

interface DateRangeInputProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: any, end: any) => void;
}

const CampaignDateRangeInput: FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onChange,
}) => {
  const [startDateInput, setStartDateInput] = useState(new Date());
  const [endDateInput, setEndDateInput] = useState(null);

  const dateChangeHandler = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDateInput(start);
    setEndDateInput(end);
    onChange(start, end);
  };

  const displayValue = () => {
    return `${moment(startDate).format('DD MMM YYYY')} - ${moment(
      endDate
    ).format('DD MMM YYYY')}`;
  };

  // eslint-disable-next-line react/display-name
  const BtnPickerCustomInput = forwardRef(
    (props: any, ref: LegacyRef<HTMLDivElement>) => (
      <div onClick={props.onClick} ref={ref}>
        <div
          className="flex cursor-pointer items-center gap-3 text-greyOcare underline hover:text-greyOcare/70"
          data-mdb-toggle="datepicker"
        >
          <p className="ml-[30px] mt-1 text-sm">{displayValue()}</p>
          <AiOutlineCalendar className="mt-[1px]" />
        </div>
      </div>
    )
  );

  return (
    <DatePicker
      selected={startDateInput}
      onChange={dateChangeHandler}
      startDate={startDateInput}
      endDate={endDateInput}
      selectsRange
      customInput={<BtnPickerCustomInput />}
      fixedHeight
      monthsShown={2}
      dayClassName={() => {
        return 'hover:bg-blueOcare hover:text-white transition focus:bg-blueOcare font-medium';
      }}
      calendarClassName="border-greyBorder rounded-lg"
    />
  );
};

export default CampaignDateRangeInput;

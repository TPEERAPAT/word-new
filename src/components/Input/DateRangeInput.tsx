import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import type { FC, LegacyRef } from 'react';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { AiOutlineCalendar } from 'react-icons/ai';

interface DateRangeInputProps {
  placeholder: string;
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: any, end: any) => void;
  height?: 40 | 48;
}

const DateRangeInput: FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  placeholder,
  onChange,
  height = 40,
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
          className={`
            flex w-full flex-row items-center rounded-lg border border-solid border-gray-300 bg-white px-4
            ${height === 48 ? 'h-[48px]' : 'h-[40px]'}
          `}
          data-mdb-toggle="datepicker"
        >
          <div className="flex truncate">
            {startDate == null || endDate == null ? (
              <div className="text-sm font-normal text-greyDarkOcare">
                {placeholder}
              </div>
            ) : (
              <div className="text-sm font-medium text-black">
                {displayValue()}
              </div>
            )}
          </div>
          <div className="ml-auto flex">
            <AiOutlineCalendar className="fill-greyDarkOcare" size={18} />
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="w-full">
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
    </div>
  );
};

export default DateRangeInput;

import DateRangeInput from '@components/Input/DateRangeInput';
import PageHead from '@components/Ui/PageHead';
import type { FC } from 'react';
import { MdStickyNote2 } from 'react-icons/md';

interface SumHeaderProps {
  startDate: Date | null;
  endDate: Date | null;
  dateChangeHandler: (start: any, end: any) => void;
}

const SumHeader: FC<SumHeaderProps> = ({
  startDate,
  endDate,
  dateChangeHandler,
}) => {
  return (
    <PageHead title="Health Summary">
      <DateRangeInput
        placeholder="เลือกวันที่"
        startDate={startDate}
        endDate={endDate}
        onChange={dateChangeHandler}
      />
      <div className="mt-4 flex cursor-pointer items-center gap-3 text-base font-medium text-redOcare">
        <MdStickyNote2 size={17.5} />
        <p>Referral Note</p>
      </div>
    </PageHead>
  );
};

export default SumHeader;

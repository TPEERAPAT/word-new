import DropdownInput from '@components/Input/DropdownInput';
import type { FC } from 'react';

interface ProvinceDropdownButtonProps {
  label: string;
  value: string[];
  onChangeHandler: Function;
}

const PayorDropdownButton: FC<ProvinceDropdownButtonProps> = ({
  label,
  value,
  onChangeHandler,
}) => {
  const payorOptions = [
    'Government',
    'Social insurance',
    'Pay by self',
    'Gold card',
  ];

  return (
    <>
      <DropdownInput
        label={label}
        options={payorOptions}
        value={value}
        onChangeHandler={onChangeHandler}
      />
    </>
  );
};

export default PayorDropdownButton;

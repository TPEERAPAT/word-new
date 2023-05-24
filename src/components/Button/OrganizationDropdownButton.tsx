import DropdownInput from '@components/Input/DropdownInput';
import type { FC } from 'react';

interface OrgranizationDropdownButtonProps {
  label: string;
  value: string[];
  onChangeHandler: Function;
}

const OrganizationDropdownButton: FC<OrgranizationDropdownButtonProps> = ({
  label,
  value,
  onChangeHandler,
}) => {
  const organizationOptions = [
    'สำนักงานตำรวจแห่งชาติ',
    'กระทรวงการคลัง',
    'Tesla Thailand Co., Ltd.',
    'UNICEF Thailand',
  ];

  return (
    <>
      <DropdownInput
        label={label}
        options={organizationOptions}
        value={value}
        onChangeHandler={onChangeHandler}
      />
    </>
  );
};

export default OrganizationDropdownButton;

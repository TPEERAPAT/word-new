import type { FC } from 'react';
import React from 'react';
import { BsFillCheckSquareFill, BsSquare } from 'react-icons/bs';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: Function;
}

const CheckBox: FC<CheckBoxProps> = ({ label, checked = false, onChange }) => {
  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => onChange()}
    >
      {checked ? (
        <BsFillCheckSquareFill className="mr-2 text-blueOcare" />
      ) : (
        <BsSquare className="mr-2 text-greyOcare" />
      )}
      <p className="text-sm font-normal">{label}</p>
    </div>
  );
};

export default CheckBox;

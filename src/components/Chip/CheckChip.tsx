import type { FC } from 'react';
import React from 'react';
import { BsFillCheckSquareFill, BsSquare } from 'react-icons/bs';

interface CheckChipProps {
  label: string;
  checked: boolean;
  onChange: Function;
  color?: 'green' | 'orange' | 'red' | 'white';
}

const CheckChip: FC<CheckChipProps> = ({
  label,
  checked = false,
  onChange,
  color = 'white',
}) => {
  function BackgroundColor() {
    switch (color) {
      case 'green':
        return 'bg-greenLightOcare hover:bg-greenOcare/25';
      case 'red':
        return 'bg-redLightOcare hover:bg-redOcare/25';
      case 'orange':
        return 'bg-orangeLightOcare hover:bg-orangeOcare/25';
      case 'white':
        return 'bg-white hover:bg-greyLightOcare';
      default:
        return 'bg-white hover:bg-greyLightOcare';
    }
  }

  function TextColor() {
    switch (color) {
      case 'green':
        return 'text-greenOcare';
      case 'red':
        return 'text-redOcare';
      case 'orange':
        return 'text-orangeOcare';
      case 'white':
        return 'text-black2Ocare';
      default:
        return 'text-black2Ocare';
    }
  }

  function BorderColor() {
    switch (color) {
      case 'green':
        return 'border-greenOcare';
      case 'red':
        return 'border-redOcare';
      case 'orange':
        return 'border-orangeOcare';
      case 'white':
        return 'border-greyBorder';
      default:
        return 'border-greyBorder';
    }
  }

  const Box = () => {
    if (checked) {
      return (
        <BsFillCheckSquareFill
          className={`
          mr-2 text-blueOcare
            ${TextColor()}
          `}
        />
      );
    }
    return <BsSquare className="mr-2 rounded-[3px] bg-white text-greyBorder" />;
  };

  return (
    <div
      className={`
        flex h-[30px] cursor-pointer items-center rounded-md border-[1px] border-solid px-2
        ${checked ? BorderColor() : 'border-greyBorder'}
        ${BackgroundColor()}
      `}
      onClick={() => onChange()}
    >
      <Box />
      <span className="text-sm font-normal text-black2Ocare">{label}</span>
    </div>
  );
};

export default CheckChip;

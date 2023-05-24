import type { FC } from 'react';
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

interface XChipProps {
  color?: 'green' | 'red' | 'blue' | 'seaBlue' | 'yellow' | 'white' | 'orange';
  text: string;
  bold?: boolean;
  className?: string;
  onClick: Function;
}

const XChip: FC<XChipProps> = ({
  color = 'green',
  text,
  bold = false,
  onClick = () => {},
  className = '',
}) => {
  function backgroundColorClass() {
    switch (color) {
      case 'green':
        return 'bg-greenLightOcare hover:bg-greenOcare/25';
      case 'red':
        return 'bg-redLightOcare hover:bg-redOcare/25';
      case 'blue':
        return 'bg-blueLightOcare hover:bg-blueOcare/25';
      case 'seaBlue':
        return 'bg-seaBlueLightOcare hover:bg-seaBlueOcare/25';
      case 'yellow':
        return 'bg-yellowLightOcare hover:bg-yellowOcare/25';
      case 'white':
        return 'bg-white hover:bg-greyLightOcare';
      case 'orange':
        return 'bg-orangeLightOcare hover:bg-orangeOcare/25';
      default:
        return 'bg-greenLightOcare hover:bg-greenOcare/25';
    }
  }

  function textColorClass() {
    switch (color) {
      case 'green':
        return 'text-greenOcare';
      case 'red':
        return 'text-redOcare';
      case 'blue':
        return 'text-blueOcare';
      case 'seaBlue':
        return 'text-seaBlueOcare';
      case 'yellow':
        return 'text-yellowOcare';
      case 'white':
        return 'text-black';
      case 'orange':
        return 'text-orangeOcare';
      default:
        return 'text-greenOcare';
    }
  }

  return (
    <div
      className={`
        flex w-fit cursor-pointer flex-row items-center rounded-lg px-2 py-1 transition
        ${backgroundColorClass()}
        ${className}
        ${
          color === 'white' ? 'border-[1px] border-solid border-greyBorder' : ''
        }
      `}
      onClick={() => onClick()}
    >
      <div
        className={`text-sm ${
          bold ? 'font-medium' : 'font-light'
        } ${textColorClass()}
            flex items-center gap-[6px]
          `}
      >
        {text}
        <RiCloseFill className="fill-redOcare" />
      </div>
    </div>
  );
};

export default XChip;

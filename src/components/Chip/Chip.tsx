import type { FC } from 'react';
import React from 'react';

interface CardProps {
  color?: 'green' | 'red' | 'blue' | 'seaBlue' | 'yellow' | 'orange' | 'white';
  fill?: boolean;
  text?: string;
  bold?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

const Chip: FC<CardProps> = ({
  color = 'green',
  fill = false,
  text = '',
  bold = false,
  className = '',
  startIcon = null,
  endIcon = null,
  onClick = () => {},
}) => {
  const backgroundColorClass = () => {
    switch (color) {
      case 'green':
        return fill ? 'bg-greenOcare' : 'bg-greenLightOcare';
      case 'red':
        return fill ? 'bg-redOcare' : 'bg-redLightOcare';
      case 'blue':
        return fill ? 'bg-blueOcare' : 'bg-blueLightOcare';
      case 'seaBlue':
        return fill ? 'bg-seaBlueOcare' : 'bg-seaBlueLightOcare';
      case 'yellow':
        return fill ? 'bg-yellowOcare' : 'bg-yellowLightOcare';
      case 'orange':
        return fill ? 'bg-orangeOcare' : 'bg-orangeOcareHover';
      case 'white':
        return fill ? 'bg-white' : 'bg-white';
      default:
        return fill ? 'bg-greenOcare' : 'bg-greenLightOcare';
    }
  };

  const textColorClass = () => {
    switch (color) {
      case 'green':
        return fill ? 'text-white' : 'text-greenOcare';
      case 'red':
        return fill ? 'text-white' : 'text-redOcare';
      case 'blue':
        return fill ? 'text-white' : 'text-blueOcare';
      case 'seaBlue':
        return fill ? 'text-white' : 'text-seaBlueOcare';
      case 'yellow':
        return fill ? 'text-white' : 'text-yellowOcare';
      case 'orange':
        return fill ? 'text-white' : 'text-orangeOcare';
      case 'white':
        return fill ? 'text-black' : 'text-black';
      default:
        return fill ? 'text-white' : 'text-greenOcare';
    }
  };

  return (
    <div
      className={`
          flex
          h-[28px]
          w-fit
          flex-row
          items-center rounded-lg
          px-3
          md:h-[32px]
          ${backgroundColorClass()}
          ${className}
          ${
            color === 'white'
              ? 'border-[1px] border-solid border-greyBorder'
              : ''
          }
        `}
      onClick={onClick}
    >
      <div
        className={`text-sm ${
          bold ? 'font-medium' : 'font-normal'
        } ${textColorClass()} flex items-center gap-[6px]`}
      >
        {startIcon}
        {text}
        {endIcon}
      </div>
    </div>
  );
};

export default Chip;

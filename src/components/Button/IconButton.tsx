import type { FC } from 'react';
import React, { useState } from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  color?: 'red' | 'white';
  onClick: Function;
  className?: string;
  tooltip?: string;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  color = 'white',
  onClick,
  className = '',
  tooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div
        onClick={() => onClick()}
        className={`${
          color === 'red'
            ? 'border-redOcare hover:bg-redOcare/10 active:bg-redOcare/50'
            : 'border-greyBorder hover:border-greyOcare active:bg-greyOcare/20'
        } relative flex h-[36px] w-[40px] cursor-pointer items-center justify-center rounded-lg border-[1px] border-solid transition ${className}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        title={tooltip}
      >
        {icon}
        {tooltip && showTooltip && (
          <div className="absolute -top-8 whitespace-nowrap rounded-md bg-white px-2 py-1 text-sm font-medium text-blueOcare shadow">
            {tooltip}
          </div>
        )}
      </div>
    </>
  );
};

export default IconButton;

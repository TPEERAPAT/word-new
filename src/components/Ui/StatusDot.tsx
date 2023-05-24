import type { FC } from 'react';
import React from 'react';

type StatusColor = 'green' | 'red' | 'orange' | 'black';

interface StatusDotProps {
  color?: StatusColor;
  message: string;
  className?: string;
  size?: 'small' | 'medium';
}

const StatusDot: FC<StatusDotProps> = ({
  color = 'green',
  message,
  className,
  size = 'medium',
}) => {
  const DotColor = () => {
    switch (color) {
      case 'green':
        return 'bg-greenOcare';
      case 'red':
        return 'bg-redOcare';
      case 'orange':
        return 'bg-orangeOcare';
      case 'black':
        return 'bg-black';
      default:
        return 'bg-greenOcare';
    }
  };

  const DotSize = () => {
    switch (size) {
      case 'small':
        return 'h-[6px] w-[6px]';
      case 'medium':
        return 'h-[8px] w-[8px]';
      default:
        return 'h-[8px] w-[8px]';
    }
  };

  const TextColor = () => {
    switch (color) {
      case 'green':
        return 'text-greenOcare';
      case 'red':
        return 'text-redOcare';
      case 'orange':
        return 'text-orangeOcare';
      case 'black':
        return 'text-black';
      default:
        return 'text-greenOcare';
    }
  };

  const TextSize = () => {
    switch (size) {
      case 'small':
        return 'text-base';
      case 'medium':
        return 'text-lg';
      default:
        return 'text-lg';
    }
  };

  return (
    <div className={`${className} flex items-center gap-[10px]`}>
      <div className={`rounded-full ${DotSize()} ${DotColor()}`} />
      <p className={`font-medium ${TextSize()} ${TextColor()}`}>{message}</p>
    </div>
  );
};

export default StatusDot;

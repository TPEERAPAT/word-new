import type { FC } from 'react';
import React from 'react';

interface ConditionProps {
  color: string;
  label: string;
}
const Condition: FC<ConditionProps> = ({ color, label }) => {
  const BackgroundColor = `bg-${color}`;

  return (
    <div className="flex items-center">
      <div className={`${BackgroundColor} h-1 w-1 rounded-[50%]`}></div>
      <p className="ml-2 text-[10px] font-medium">{label}</p>
    </div>
  );
};
export default Condition;

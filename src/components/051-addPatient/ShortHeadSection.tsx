import type { FC } from 'react';
import React from 'react';

interface HeadSectionProps {
  label: string;
}

const ShortHeadsection: FC<HeadSectionProps> = ({ label = '' }) => {
  return (
    <div className="flex w-full flex-row items-center">
      <span className="mr-4 inline self-stretch text-base font-medium">
        {label}
      </span>
      <span className={`h-[1px] grow bg-gray-300`}></span>
    </div>
  );
};

export default ShortHeadsection;

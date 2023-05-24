import type { FC } from 'react';
import React from 'react';

interface HeadWithLineProps {
  header: string;
}

const HeadWithLine: FC<HeadWithLineProps> = ({ header }) => {
  return (
    <div className="flex w-full flex-row items-center">
      <span className="mr-4 inline self-stretch text-sm font-normal">
        {header}
      </span>
      <span className={`h-[1px] grow bg-gray-300`}></span>
    </div>
  );
};

export default HeadWithLine;

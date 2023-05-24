import type { FC } from 'react';
import React from 'react';

import ToggleSidebar from './ToggleSidebar';

interface PageHeadProps {
  title?: string;
  headChildren?: React.ReactNode;
  children?: React.ReactNode;
}

export const HeadStyle = 'text-xl font-medium md:text-[32px]';

const PageHead: FC<PageHeadProps> = ({ title, headChildren, children }) => {
  return (
    <>
      <ToggleSidebar />
      <div className="flex flex-col bg-white p-[18px] shadow-lg sm:p-6">
        <div
          className={`flex items-center gap-6 ${children && 'mb-4 sm:mb-6'}`}
        >
          {title && <h1 className={HeadStyle}>{title}</h1>}
          {headChildren}
        </div>
        {children}
      </div>
    </>
  );
};

export default PageHead;

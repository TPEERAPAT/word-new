import type { FC } from 'react';
import React from 'react';

interface DisplayBoxProps {
  header: string;
  children: React.ReactNode;
  className?: string;
  divClassName?: string;
}

const DisplayBox: FC<DisplayBoxProps> = ({
  header,
  children,
  className = '',
  divClassName = '',
}) => {
  return (
    <div className={divClassName}>
      <h3
        className={`mb-1.5 text-sm font-normal text-greyDarkOcare ${className}`}
      >
        {header}
      </h3>
      {children}
    </div>
  );
};

export default DisplayBox;

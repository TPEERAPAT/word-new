import type { FC } from 'react';

interface HeadSectionProps {
  label: string;
  style?: string;
}

const HeadSection: FC<HeadSectionProps> = ({ label = '', style }) => {
  return (
    <div className={`mb-4 mt-6 flex w-full flex-row items-center ${style}`}>
      <span className="mr-4 inline self-stretch font-medium">{label}</span>
      <span className={`h-[1px] grow bg-gray-300`}></span>
    </div>
  );
};

export default HeadSection;

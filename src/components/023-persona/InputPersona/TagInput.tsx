import { ShowToast } from '@components/Toast/OcareToast';
import type { FC } from 'react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface TagInputProps {
  placeholder: string;
}

const TagInput: FC<TagInputProps> = ({ placeholder }) => {
  return (
    <div
      className="flex h-12 w-full cursor-pointer items-center rounded-lg border-[1px] border-solid border-greyBorder bg-white px-3 transition hover:border-blueOcare"
      onClick={() => ShowToast('default', 'developing...')}
    >
      <p className="text-sm font-normal text-greyDarkOcare">{placeholder}</p>
      <FiChevronDown size={20} className="ml-auto text-greyOcare" />
    </div>
  );
};

export default TagInput;

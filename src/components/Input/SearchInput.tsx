import type { FC } from 'react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchInputProps {
  placeholder: string;
  type?: 'filled' | 'outlined';
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  type = 'filled',
  className,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <div
      className={`
        ${className}
        ${
          type === 'filled'
            ? 'border-transparent bg-greySemiLightOcare'
            : 'border-greyBorder bg-transparent'
        }
        flex h-12 w-full items-center gap-3 rounded-lg border-[1px] border-solid bg-greySemiLightOcare px-3 transition hover:border-blueOcare
      `}
    >
      <FiSearch className="text-black" size={20} />
      <input
        type="text"
        id="id_or_name"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full border-transparent bg-transparent font-sans text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;

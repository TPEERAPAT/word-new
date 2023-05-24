import type { FC } from 'react';
import React from 'react';

interface TextAreaInputProps {
  placeholder: string;
  value: string;
  onChange: Function;
}

const TextAreaInput: FC<TextAreaInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <textarea
        id="username"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(event)
        }
        className={`h-[138px] w-full rounded-lg border border-solid border-greyBorder px-4 py-3 font-sans text-sm font-medium transition-colors placeholder:font-normal placeholder:text-greyDarkOcare hover:border-greyOcare focus:border-[1.5px] focus:border-blueOcare focus:outline-none`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaInput;

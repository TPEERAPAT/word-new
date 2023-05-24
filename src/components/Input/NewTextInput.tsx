import DisplayBox from '@components/Ui/DisplayBox';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

interface NewTextInputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  legend?: string;
  placeholder: string;
  value: string | number | null;
  onChange: Function;
  prefix?: string;
  required?: boolean;
  alertRequired?: boolean;
}

const NewTextInput: FC<NewTextInputProps> = ({
  type = 'text',
  legend,
  placeholder,
  value,
  onChange,
  prefix,
  required = false,
  alertRequired = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (alertRequired && inputRef.current) {
      inputRef.current.focus();
    }
  }, [alertRequired]);

  const InputBox = (
    <div className="relative">
      {prefix && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-700">
          {prefix}
        </span>
      )}
      <input
        type={type}
        value={value || ''}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event)
        }
        className={`
          ${prefix ? 'pl-8' : ''}
          ${
            alertRequired
              ? 'border-redOcare focus:border-[2px] focus:outline-none'
              : 'border-greyBorder hover:border-greyOcare focus:border-blueOcare focus:outline-none'
          }
          h-[48px] w-full rounded-lg border border-solid px-4 text-sm font-medium transition-colors placeholder:font-normal placeholder:text-greyDarkOcare 
        `}
        ref={inputRef}
        placeholder={placeholder}
      />
    </div>
  );

  if (legend && required) {
    return (
      <div>
        <div className="flex">
          <h3 className="mb-1.5 text-sm font-normal text-greyDarkOcare">
            {legend}
          </h3>
          <span className="text-redOcare">*</span>
        </div>
        {InputBox}
      </div>
    );
  }
  if (legend) {
    return <DisplayBox header={legend}>{InputBox}</DisplayBox>;
  }
  return InputBox;
};

export default NewTextInput;

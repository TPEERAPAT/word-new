/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import type { FC } from 'react';
import { createElement } from 'react';
import type { IconType } from 'react-icons';

interface TextInputProps {
  placeholder?: string;
  icon?: IconType;
  value: string;
  onChange: Function;
  height: number;
}

const TextInput: FC<TextInputProps> = ({
  placeholder = '',
  icon = null,
  value = '',
  onChange = () => {},
  // width,
  height,
}) => {
  const InputHeight = height !== 0 ? `h-[${height}px]` : 'h-[100%]';
  return (
    <>
      <div className="relative">
        {icon != null && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {createElement(icon, { className: 'w-8 h-8 fill-[#D1D1D6]' })}
          </div>
        )}

        <input
          type="text"
          className={`
            w-[500px]
            border border-solid border-greyLightOcare
            bg-white
            text-sm
            ${InputHeight}
            rounded-lg
            p-2
            placeholder-greyDarkOcare
            outline-none
          `}
          placeholder={placeholder}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
        />
      </div>
    </>
  );
};

export default TextInput;

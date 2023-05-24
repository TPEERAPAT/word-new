import { useClickOutside } from 'hooks';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { BsCheckSquareFill, BsSquare } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

interface DropdownInputProps {
  icon?: Function;
  label: string;
  options: string[];
  value: any[];
  onChangeHandler: Function;
}

const DropdownInput: FC<DropdownInputProps> = ({
  icon,
  label,
  options,
  value,
  onChangeHandler,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const selectRef = useRef<any>();

  useClickOutside(selectRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  const onSelectOption = (option: any) => {
    if (!value.includes(option)) {
      const newValue = [...value];
      newValue.push(option);
      onChangeHandler(newValue);
    } else {
      const newValue = value.filter((item: any) => item !== option);
      onChangeHandler(newValue);
    }
  };

  const displayValue = () => {
    let text = '';

    value.forEach((v) => {
      text += `${v} | `;
    });

    return text.slice(0, -2);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className={`
                    block h-[40px] w-full
                    cursor-pointer appearance-none rounded-lg border
                    border-solid
                    border-[#D1D1D6] bg-white
                    transition
                    hover:border-blueOcare
                  `}
        id="type"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {value.length > 0 ? (
          <div className="flex items-center px-2 py-1.5">
            {icon && <div className="ml-1 mr-4">{icon()}</div>}
            <div
              className={`float-left mt-1 flex flex-1 flex-wrap pr-4 text-sm capitalize`}
            >
              {displayValue().slice(0, 32)}
              {displayValue().length > 32 && ' ....'}
            </div>
            <FiChevronDown size={20} className="ml-auto text-greyOcare" />
          </div>
        ) : (
          <div className="mt-[9px] flex overflow-hidden px-3">
            {icon && <div className="ml-1 mr-4">{icon()}</div>}
            <div className="flex-1 text-sm font-normal text-greyDarkOcare">
              {label}
            </div>
            <FiChevronDown size={20} className="ml-auto text-greyOcare" />
          </div>
        )}
      </div>
      {open && (
        <div className="absolute z-50 max-h-[300px] w-full divide-y divide-gray-100 overflow-y-auto bg-white shadow-lg transition duration-300 ease-in-out">
          {options.map((option) => {
            return (
              <div
                key={option}
                className="cursor-pointer hover:bg-backgroundOcare"
                onClick={() => {
                  onSelectOption(option);
                }}
              >
                <div className="group flex px-4 py-1.5">
                  <div className="flex items-center">
                    {value.includes(option) ? (
                      <BsCheckSquareFill className="pointer-events-none" />
                    ) : (
                      <BsSquare className="pointer-events-none" />
                    )}
                  </div>

                  <div className="ml-2 flex flex-wrap capitalize">{option}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;

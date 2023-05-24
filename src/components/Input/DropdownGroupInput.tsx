// @ts-nocheck

import { useClickOutside } from 'hooks';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { BsCheckSquareFill, BsSquare } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

interface OptionsGroupType {
  [key: string]: string[];
}

interface DropdownGroupInputProps {
  label: string;
  options: OptionsGroupType;
  value: any[];
  onChangeHandler: Function;
}

const DropdownGroupInput: FC<DropdownGroupInputProps> = ({
  label,
  options,
  value,
  onChangeHandler,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectAllStatus, setSelectAllStatus] = useState<boolean[]>([
    ...Array(Object.keys(options).length).fill(false),
  ]);
  const [collapseGroups, setCollapseGroups] = useState<boolean[]>([
    ...Array(Object.keys(options).length).fill(false),
  ]);
  const selectRef = useRef<any>();

  useClickOutside(selectRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  const selectAllOptions = (index: number) => {
    if (selectAllStatus[index]) {
      const newSelectAllStatus = [...selectAllStatus];
      newSelectAllStatus[index] = false;
      setSelectAllStatus(newSelectAllStatus);

      const newValue = value.filter(
        (item: any) => !options[Object.keys(options)[index]].includes(item)
      );
      onChangeHandler(newValue);
    } else {
      const newSelectAllStatus = [...selectAllStatus];
      newSelectAllStatus[index] = true;
      setSelectAllStatus(newSelectAllStatus);

      const newValue = [...value];

      options[Object.keys(options)[index]].forEach((item: any) => {
        if (!value.includes(item)) {
          newValue.push(item);
        }
      });
      onChangeHandler(newValue);
    }
  };

  const selectAllCal = (calValue: string[]) => {
    const newSelectAllStatus = [...selectAllStatus];
    for (let i = 0; i < Object.keys(options).length; i++) {
      newSelectAllStatus[i] = options[Object.keys(options)[i]].every((r) =>
        calValue.includes(r)
      );
    }
    setSelectAllStatus(newSelectAllStatus);
  };

  const onCallpaseToggle = (index: number) => {
    const newCollapseGroups = [...collapseGroups];
    newCollapseGroups[index] = !newCollapseGroups[index];
    setCollapseGroups(newCollapseGroups);
  };

  const onSelectOption = (option: any) => {
    if (!value.includes(option)) {
      const newValue = [...value];
      newValue.push(option);
      onChangeHandler(newValue);
      selectAllCal(newValue);
    } else {
      const newValue = value.filter((item: any) => item !== option);
      onChangeHandler(newValue);
      selectAllCal(newValue);
    }
  };

  useEffect(() => {
    selectAllCal(value);
  }, [options]);

  const displayValue = () => {
    let text = '';
    const includeItems: string[] = [];

    Object.keys(options).forEach((group, index) => {
      if (selectAllStatus[index]) {
        text += `${group} | `;
        options[Object.keys(options)[index]].forEach((t) => {
          includeItems.push(t);
        });
      }
    });

    value.forEach((v) => {
      if (!includeItems.includes(v)) {
        text += `${v} | `;
      }
    });

    return text.slice(0, -2);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className={`
                    block h-[40px] w-full
                    cursor-pointer appearance-none rounded-lg
                    border
                    border-solid
                    border-[#D1D1D6] bg-white hover:border-blueOcare`}
        id="type"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {value.length > 0 ? (
          <div className="flex items-center p-2">
            <div
              className={`float-left flex flex-1 flex-wrap pr-4 text-sm capitalize`}
            >
              {displayValue().slice(0, 32)}
              {displayValue().length > 32 && ' ....'}
            </div>
            <FiChevronDown size={20} className="ml-auto text-greyOcare" />
          </div>
        ) : (
          <div className="mt-[9px] flex overflow-hidden px-3">
            <div className="flex-1 text-sm font-normal text-greyDarkOcare">
              {label}
            </div>
            <FiChevronDown size={20} className="ml-auto text-greyOcare" />
          </div>
        )}
      </div>
      {open && (
        <div className="absolute z-50 max-h-[300px] w-full divide-y divide-gray-100 overflow-y-auto bg-white shadow-lg transition duration-300 ease-in-out">
          {Object.keys(options).map((group, index) => {
            return (
              <div key={group}>
                {/* Group name */}
                <div
                  className="cursor-pointer hover:bg-backgroundOcare"
                  onClick={() => {
                    onCallpaseToggle(index);
                  }}
                >
                  <div className="group flex px-4 py-1.5">
                    <div
                      className="flex items-center"
                      onClick={() => selectAllOptions(index)}
                    >
                      {selectAllStatus[index] ? (
                        <BsCheckSquareFill className="pointer-events-none" />
                      ) : (
                        <BsSquare className="pointer-events-none" />
                      )}
                    </div>

                    <div className="ml-2 flex flex-wrap capitalize">
                      {group}
                    </div>

                    <div className="flex grow" />

                    <div className="flex items-center">
                      {collapseGroups[index] ? (
                        <IoCaretUp className="fill-greyDarkOcare" />
                      ) : (
                        <IoCaretDown className="fill-greyDarkOcare" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Group choices */}
                {collapseGroups[index] &&
                  options[group].map((option) => {
                    return (
                      <div
                        key={option}
                        className="cursor-pointer hover:bg-greyOcare"
                        onClick={() => {
                          onSelectOption(option);
                        }}
                      >
                        <div className="group ml-8 flex px-4 py-1.5">
                          <div className="flex items-center">
                            {value.includes(option) ? (
                              <BsCheckSquareFill className="pointer-events-none" />
                            ) : (
                              <BsSquare className="pointer-events-none" />
                            )}
                          </div>

                          <div className="ml-2 flex flex-wrap capitalize">
                            {option}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownGroupInput;

// import React, { useState } from 'react';

// interface DropdownOption {
//   label: string;
//   value: string;
// }

// interface DropdownProps {
//   options: DropdownOption[];
//   onSelect: (value: string) => void;
// }

// const Dropdown = ({ options, onSelect }: DropdownProps) => {
//   const [selected, setSelected] = useState<DropdownOption | null>(null);

//   return (
//     <div>
//       <select
//         value={selected ? selected.value : ''}
//         onChange={(e) => {
//           const selectedOption = options.find(
//             (option) => option.value === e.target.value
//           );
//           setSelected(selectedOption || null);
//           if (selectedOption) {
//             onSelect(selectedOption.value);
//           }
//         }}
//       >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// interface DropdownGroupInputProps {
//   options: DropdownOption[][];
//   onSelect: (selected: DropdownOption[]) => void;
// }

// const DropdownGroupInput = ({ options, onSelect }: DropdownGroupInputProps) => {
//   const [selected, setSelected] = useState<DropdownOption[]>([]);

//   const handleSelect = (index: number) => (value: string) => {
//     const newSelected = [...selected];
//     newSelected[index] = options[index]?.find(
//       (option) => option.value === value
//     )!;
//     setSelected(newSelected);
//     onSelect(newSelected);
//   };

//   return (
//     <div>
//       {options.map((dropdownOptions, index) => (
//         <Dropdown
//           key={index}
//           options={dropdownOptions}
//           onSelect={handleSelect(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default DropdownGroupInput;

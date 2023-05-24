import type { FC } from 'react';
import React from 'react';
import type { IconType } from 'react-icons';

interface ButtonDropdownProps {
  name: string;
  icon: IconType;
  toggleDropdown: boolean;
}

const ButtonDropdown: FC<ButtonDropdownProps> = ({
  name,
  icon,
  toggleDropdown,
}) => {
  return (
    <button
      className={`
        flex h-10 w-full cursor-pointer justify-between
        rounded-lg border-[1px] border-solid 
        ${toggleDropdown ? 'border-blueOcare' : 'border-[#E5E5EA]'}
        items-center bg-white px-4 text-black 
      `}
    >
      {name}
      {React.createElement(icon, { className: 'w-4 h-4 fill-greyDarkOcare' })}
      {/* <Image src={src} alt="" /> */}
    </button>
  );
};

export default ButtonDropdown;

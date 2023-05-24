// import OcareLogo from '@assets/Util/logo-white-red.png';
import LogoText from '@assets/Util/logo-white-red-text.svg';
import React from 'react';
import { IoMdMenu } from 'react-icons/io';

const ToggleSidebar = () => {
  return (
    <div className="flex h-[60px] items-center gap-[18px] bg-blueOcare px-[18px] xl:hidden">
      <IoMdMenu className="cursor-pointer text-white" size={20} />
      <LogoText />
    </div>
  );
};

export default ToggleSidebar;

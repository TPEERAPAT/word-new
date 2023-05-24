import Icon from '@assets/Navbar/TopIcon.svg';
import type { RootState } from '@redux/store';
import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';

interface TopbarProps {
  showSideBar: Function;
}

const Topbar: FC<TopbarProps> = ({ showSideBar }) => {
  const { navbar } = useSelector((state: RootState) => ({ ...state }));

  return (
    <div
      className={`
      flex
      w-full
      items-center
      ${navbar.collapse ? 'h-16' : 'h-0'}
      bg-foregroundOcare
      pl-9
      shadow-md
      transition-all
    `}
    >
      <>
        <div
          onClick={() => showSideBar()}
          className="bg-transparent drop-shadow-none"
          data-testid="topbar-icon-test"
        >
          <Icon alt="Ocare Top Icon" />
        </div>

        <div className="ml-7 mr-6 h-8 w-[1px] bg-greyOcare"></div>
        <p className="text-lg font-semibold text-blueTextOcare">
          Hospital name
        </p>
      </>
    </div>
  );
};

export default Topbar;

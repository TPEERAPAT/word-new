import LogoNoText from '@assets/Util/logo-white-red-no-text.svg';
import LogoText from '@assets/Util/logo-white-red-text.svg';
import type { RootState } from '@redux/store';
import type { FC } from 'react';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoBagAdd as healthIcon } from 'react-icons/io5';
import {
  RiDatabase2Fill as importIcon,
  RiSettings3Fill as settingIcon,
  RiUserHeartFill as engagementIcon,
} from 'react-icons/ri';
import { TiHome as homeIcon } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import DefaultSidebarItem from './DefaultSidebarItem';
import SelectedSidebarItem from './SelectedSidebarItem';

interface SidebarProps {
  activeNav:
    | 'Health Atlas'
    | 'Clincal Explorer'
    | 'Patient Engagement'
    | 'Data Management'
    | 'Setting'
    | 'no';
  activeSubNav?: /* Health Dashboard */
  | 'Health Dashboard'
    | 'Geographic Dashboard'

    // Clincal Explorer
    | 'Persona Analytics'
    | 'Health Campaign'
    | 'Persona'

    // Patient Engagement
    | 'Coordinated'
    | 'Activities'
    | 'Patient Profile'

    // Data Management
    | 'Add Patient'
    | 'Bulk Data Import';
}

const Sidebar: FC<SidebarProps> = ({ activeNav, activeSubNav }) => {
  const { navbar } = useSelector((state: RootState) => ({ ...state }));

  const navDatas = [
    {
      icon: homeIcon,
      name: 'Health Atlas',
      subNav: [
        {
          name: 'Health Dashboard',
          link: '/', // index page
        },
        {
          name: 'Geographic Dashboard',
          link: '/geographic-analytics',
        },
      ],
    },
    {
      icon: healthIcon,
      name: 'Clincal Explorer',
      subNav: [
        {
          name: 'Persona',
          link: '/persona',
        },
        {
          name: 'Persona Analytics',
          link: '/persona-analytics',
        },
        {
          name: 'Health Campaign',
          link: '/health-campaign',
        },
      ],
    },
    {
      icon: engagementIcon,
      name: 'Patient Engagement',
      subNav: [
        {
          name: 'Coordinated',
          link: '/coordinated',
        },
        {
          name: 'Activities',
          link: '/activities',
        },
        {
          name: 'Patient Profile',
          link: '/patient-profile',
        },
      ],
    },
    {
      icon: importIcon,
      name: 'Data Management',
      link: '/add-patient',
      // subNav: [
      //   {
      //     name: 'Add Patient',
      //     link: '/add-patient',
      //   },
      //   {
      //     name: 'Bulk Data Import',
      //     link: '/bulk-data-import',
      //   },
      // ],
    },
    {
      icon: settingIcon,
      name: 'Setting',
      link: '/setting',
    },
  ];

  const allNav = navDatas.map((eachNav: any, i: number) => {
    if (activeNav === eachNav.name) {
      return (
        <SelectedSidebarItem
          key={i}
          item={eachNav}
          activeSubNav={activeSubNav}
        />
      );
    }
    return <DefaultSidebarItem key={i} item={eachNav} />;
  });

  const Sidebar1280Toggle = () => {
    return (
      <div
        className={`
          z-10
          hidden
          min-h-screen
          w-[60px]
          flex-col
          items-center
          justify-center
          bg-blueOcare
          transition-all
          xl:fixed xl:flex
          2xl:hidden
        `}
      >
        <LogoNoText className="absolute top-6" />
        <div
          className={`
            absolute
            ml-12 flex h-12 w-12 shrink-0 cursor-pointer items-center 
            justify-center rounded-lg border-[1px] border-solid border-blueOcare
            bg-white transition-colors hover:bg-greySemiLightOcare
          `}
        >
          <FiChevronRight size={22} className="text-blueOcare" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`
        ${navbar.collapse ? 'w-0' : 'w-[240px]'}
        z-10
        hidden
        min-h-screen
        overflow-hidden
        bg-blueOcare
        transition-all
        2xl:fixed
        2xl:block
        `}
      >
        <LogoText data-testid="sidebar-icon-test" className="ml-6 mt-6" />
        <div>{allNav}</div>
      </div>
      <Sidebar1280Toggle />
    </>
  );
};

export default Sidebar;

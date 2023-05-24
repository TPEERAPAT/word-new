import { hideSideBarAction } from '@redux/navbar';
import type { AppDispatch } from '@redux/store';
import type { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import ContentSection from './ContentSection';
import SideBar from './Sidebar';

interface NavbarProps {
  children: React.ReactNode;
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
  disable?: boolean;
}

const Navbar: FC<NavbarProps> = ({
  children,
  activeNav,
  activeSubNav,
  disable,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  // const showSideBar = () => {
  //   dispatch(showSideBarAction());
  // };

  const hideSideBar = () => {
    dispatch(hideSideBarAction());
  };

  if (disable) {
    return <>{children}</>;
  }

  return (
    <>
      {/* <TopBar showSideBar={showSideBar} /> */}
      <div className="grid w-full xl:grid-cols-[60px_auto] 2xl:grid-cols-[240px_auto]">
        <div className="z-20 w-full">
          <SideBar activeNav={activeNav} activeSubNav={activeSubNav} />
        </div>

        <div className="z-10 w-full bg-backgroundOcare">
          <ContentSection hideSideBar={hideSideBar}>{children}</ContentSection>
        </div>
      </div>
    </>
  );
};

export default Navbar;

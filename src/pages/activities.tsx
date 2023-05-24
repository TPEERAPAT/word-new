import Navbar from '@components/navbar/Navbar';
import React from 'react';

const ActivitiesPage = () => {
  return (
    <Navbar activeNav="Patient Engagement" activeSubNav="Activities">
      <div className="flex h-full flex-col items-center justify-center">
        <h1>Activities</h1>
        <p>in development...</p>
      </div>
    </Navbar>
  );
};

export default ActivitiesPage;

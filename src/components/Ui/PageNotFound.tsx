import Navbar from '@components/navbar/Navbar';
import React from 'react';

const PageNotFound = () => {
  return (
    <>
      <Navbar activeNav="no">
        <div
          className="page_container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: 'var(--grey-ocare)',
          }}
        >
          <h1>404 Page Not Found</h1>
          <p style={{ display: 'flex' }}>Please go back to the homepage</p>
        </div>
      </Navbar>
    </>
  );
};

export default PageNotFound;

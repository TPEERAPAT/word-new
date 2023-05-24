import loadingGif from '@assets/Util/load.gif';
import Image from 'next/image';
import { useState } from 'react';

import Navbar from '../navbar/Navbar';

const Loading = () => {
  const [showFailLoading, setShowFailLoading] = useState(false);

  setTimeout(() => {
    setShowFailLoading(true);
  }, 6000);

  if (showFailLoading) {
    return (
      <>
        <Navbar activeNav="no">
          <div className="page_container">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--grey-ocare)',
              }}
            >
              <h1>{"Can't request data"}</h1>
              <p>{"There're some technical issues"}</p>
              <p>{'Please contact us at support@ocare.com'}</p>
            </div>
          </div>
        </Navbar>
      </>
    );
  }

  return (
    <>
      <Navbar activeNav="no">
        <div className="flex h-full items-center justify-center bg-[#B4C6C9] opacity-30">
          <Image src={loadingGif} alt="loading" height={400} width={400} />
        </div>
      </Navbar>
    </>
  );
};

export default Loading;

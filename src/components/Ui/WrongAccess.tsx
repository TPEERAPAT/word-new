import type { FC } from 'react';
import React from 'react';

const WrongAccess: FC = () => {
  function redirectToLogin() {
    // send api to /api/deleteCookie
    try {
      fetch('/api/deleteCookie', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      `${err}`;
      // console.log(err);
    }
    window.location.href = 'https://atlasclient-auth.optimizecare.com/';
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1>Access Denied</h1>
        <p className="mb-1.5">
          Your login credentials are either incorrect or have expired
        </p>
        <p
          className="cursor-pointer text-xl text-blueOcare underline underline-offset-2 transition hover:font-normal hover:text-blueOcare/80"
          onClick={() => redirectToLogin()}
        >
          Please log in again
        </p>
      </div>
    </div>
  );
};

export default WrongAccess;

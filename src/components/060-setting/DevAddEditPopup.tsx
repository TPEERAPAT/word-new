import Button from '@components/Button/Button';
import type { FC } from 'react';
import React from 'react';

interface DevAddEditPopupProps {
  hidePopup: () => void;
}

const DevAddEditPopup: FC<DevAddEditPopupProps> = () => {
  const SubmitButton = (
    <div className="flex justify-between">
      {/* eslint-disable-next-line no-console */}
      <Button onClick={() => console.log('save')} text="save" />
      {/* eslint-disable-next-line no-console */}
      <Button onClick={() => console.log('delete')} text="delete" />
    </div>
  );

  return (
    <>
      <div className="relative flex h-screen w-full">
        <div className="absolute z-50 flex h-full w-full bg-greyOcare/80">
          <p>I love dog</p>
          {SubmitButton}
        </div>
      </div>
    </>
  );
};

export default DevAddEditPopup;

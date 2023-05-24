import Button from '@components/Button/Button';
import type { MouseEventHandler } from 'react';
import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';

import type { IFileUpload } from './Data-Management/WhitelistImport';

interface IModal {
  onHideModal: MouseEventHandler<HTMLDivElement>;
  fileUpload: IFileUpload;
  loadingStatus: boolean;
  onLoadingHandler: Function;
}

const Modal: React.FC<IModal> = ({
  onHideModal,
  fileUpload,
  loadingStatus,
  onLoadingHandler,
}) => {
  const [progress, setProgress] = useState(0);
  let interval: any;

  useEffect(() => {
    if (loadingStatus) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(interval);
      onLoadingHandler(false);
      setProgress(0);
    }
  }, [loadingStatus]);

  useEffect(() => {
    if (progress === 100) {
      onLoadingHandler(false);
      clearInterval(interval);
      setProgress(0);
    }
  }, [progress, loadingStatus]);

  return (
    <div
      className="
        fixed inset-0 z-20 flex 
        flex-col items-center justify-center bg-black/25 backdrop-blur-sm
      "
      onClick={onHideModal}
    >
      {loadingStatus && (
        <div
          className="
          absolute z-20 flex h-[200px] flex-col 
          items-center justify-center gap-6 rounded-[10px] bg-white p-10
          "
        >
          <div className="flex w-[100%] flex-row items-center justify-between text-blueOcare">
            <p className=" text-[24px] font-semibold">Uploading...</p>
            <p>1/1</p>
          </div>
          <div className="h-1.5 w-[400px] rounded-full bg-greySettingOcare/10">
            <div
              className="h-1.5 rounded-full bg-blueOcare"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex w-[100%] flex-row justify-between text-greySettingOcare/40">
            <p className="text-blueOcare">{progress}%</p>
            <p>
              {Math.floor(progress / 60)} min {progress % 60} sec
            </p>
          </div>
        </div>
      )}
      {!loadingStatus && (
        <div
          className="
            absolute z-20 flex flex-col items-center 
            justify-center gap-6 rounded-[10px] bg-white p-10
          "
        >
          <div className="flex items-center justify-center">
            {fileUpload.FileData ? (
              <BsCheckCircleFill className="fill-greenOcare text-[40px]" />
            ) : (
              <IoMdCloseCircle className="fill-red-500 text-[50px]" />
            )}
          </div>
          <p className="text-[20px] font-medium">
            Upload {fileUpload.FileData ? ' Success!' : 'Failed'}
          </p>
          {fileUpload.FileData ? (
            <p className="rounded-[6px] bg-[#F2F2F7] px-4 py-1 text-[12px]">
              {fileUpload.FileData?.name as string}
            </p>
          ) : (
            <p className="px-4 py-1 text-[12px]">
              อัปโหลดข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง
            </p>
          )}
          <Button text="รับทราบ" size="md" onClick={onHideModal} />
        </div>
      )}
    </div>
  );
};

export default Modal;

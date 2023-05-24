import Button from '@components/Button/Button';
// import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import DataCard from './DataCard';

interface ICheckBoxImport {
  title: string;
}

interface IWhitelistImport {
  onShowModal?: Function | undefined;
  onFileUploadHandler: Function;
  onLoadingHandler: Function;
}

export interface IFileUpload {
  FileData: File | null | undefined;
}

export const defaultValues = {
  FileData: undefined,
};

export const CheckboxImport: React.FC<ICheckBoxImport> = ({ title }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      className={`w-[520px] border border-solid bg-white ${
        isVisible
          ? 'h-[100%] border-blueOcare'
          : 'h-[50px] border-[rgba(0,0,0,0.1)]'
      } flex flex-col items-start justify-start rounded-[8px] p-3`}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <div
          onClick={() => setIsVisible(!isVisible)}
          className={`flex h-5 w-5 items-center justify-center rounded-[50%] border-2 border-solid border-blueOcare`}
        >
          {isVisible && (
            <p
              className={`h-3 w-3 rounded-[50%] ${
                isVisible ? 'bg-blueOcare' : 'bg-white'
              }`}
            ></p>
          )}
        </div>
        <p className="p-1 text-sm font-medium">{title}</p>
      </div>
      {isVisible && (
        <div className="py-8 pl-8">
          <div className="flex h-5 w-[100%] flex-row items-center justify-between gap-4 py-4">
            <div className="flex w-[210px] flex-col">
              <label className="py-2">Date</label>
              <input
                type="date"
                className="
                  rounded-[4px] border-solid border-[rgba(0,0,0,0.1)] 
                  p-2
                  outline-none
                "
                // onChange={twoCharInDate}
              />
            </div>
            <div className="flex w-[210px] flex-col">
              <label className="py-2">Time</label>
              <input
                type="time"
                className="
                  rounded-[4px] border-solid border-[rgba(0,0,0,0.1)] 
                  p-2
                  outline-none
                "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WhitelistImport: React.FC<IWhitelistImport> = ({
  onShowModal,
  onFileUploadHandler,
  onLoadingHandler,
}) => {
  const { register, handleSubmit, reset } = useForm<IFileUpload>({
    defaultValues,
  });

  const [fileLoad, setFileLoad] = useState<File | null | undefined>(null);

  const onSubmit = (data: IFileUpload) => {
    const fileLoads: IFileUpload = {
      ...data,
      FileData: fileLoad,
    };
    onFileUploadHandler(fileLoads);

    if (typeof onShowModal === 'function') {
      onShowModal();
      onLoadingHandler(true);
    }
  };

  const resetFormHandler = () => {
    reset(defaultValues);
    setFileLoad(null);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="opacity-30">
          นำเข้าข้อมูล Whitelst HN/ ID เพื่อรับข้อมูลจากระบบ
        </p>
      </div>
      <DataCard>
        <div className="max-w-[760px] gap-24 p-6 md:flex">
          {/* form */}
          <div className="flex max-w-[270px] flex-col md:min-w-[270px]">
            <div className="mb-3 flex flex-col">
              <p className="mb-2 text-sm font-medium">
                Upload file
                <span className="opacity-30"> (.XLSX or .CSV)</span>
              </p>
              <div
                className="relative inline-block h-[45px] 
                w-[271px] cursor-pointer overflow-hidden rounded-[8px] border border-solid 
                border-blueOcare bg-white"
              >
                <input
                  className="absolute cursor-pointer text-[100px] opacity-0"
                  type="file"
                  placeholder="upload"
                  {...register('FileData', {
                    onChange: (e) => setFileLoad(e.target.files?.[0]),
                  })}
                />
                <label
                  className="mt-[8px] flex cursor-pointer 
                  items-center justify-center
                  font-bold text-blueOcare"
                >
                  Upload
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="my-[8px] text-sm font-medium">Scheduled job</p>
              <div className="flex flex-row justify-between gap-8">
                <div className="">
                  <CheckboxImport title={'Import now'} />
                </div>
                <div className="">
                  <CheckboxImport title={'Set Scheduled'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataCard>
      <div className="flex items-center justify-end gap-4 pb-4">
        <button
          className="
            cursor-pointer rounded-[10px]
          border-2 border-solid border-greySettingOcare/10 bg-white 
          px-[85px] py-3"
          onClick={resetFormHandler}
        >
          Reset Default
        </button>
        <Button text="Submit" size="md" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default WhitelistImport;

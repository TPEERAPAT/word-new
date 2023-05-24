import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function BtnSubmit() {
  return (
    <div className="z-20 ml-6 flex w-[271px] flex-col items-center">
      <button
        type="submit"
        className="flex h-10 w-full cursor-pointer flex-row items-center justify-center rounded-lg border-[1px] border-solid border-[#E5E5EA] bg-[#043673] px-4 text-white"
      >
        <div className="flex">
          <HiMagnifyingGlass className="mr-3 fill-white" />
        </div>

        <div className="flex">แสดงข้อมูล</div>
      </button>
    </div>
  );
}
